/** @namespace H5P */
H5P.Video = (function ($, ContentCopyrights, MediaCopyright, handlers) {

  /**
   * The ultimate H5P video player!
   *
   * @class
   * @param {Object} parameters Options for this library.
   * @param {Object} parameters.visuals Visual options
   * @param {Object} parameters.playback Playback options
   * @param {Object} parameters.a11y Accessibility options
   * @param {Boolean} [parameters.startAt] Start time of video
   * @param {Number} id Content identifier
   * @param {Object} extras Content Details
   */
  function Video(parameters, id, extras) {
    var self = this;
    self.contentId = id;
    self.extras = extras;

    // Ref youtube.js - ipad & youtube - issue
    self.pressToPlay = false;

    // Reference to the handler
    var handlerName = '';

    // Initialize event inheritance
    H5P.EventDispatcher.call(self);

    // Default language localization
    parameters = $.extend(true, parameters, {
      l10n: {
        name: 'Video',
        loading: 'Video player loading...',
        noPlayers: 'Found no video players that supports the given video format.',
        noSources: 'Video source is missing.',
        aborted: 'Media playback has been aborted.',
        networkFailure: 'Network failure.',
        cannotDecode: 'Unable to decode media.',
        formatNotSupported: 'Video format not supported.',
        mediaEncrypted: 'Media encrypted.',
        unknownError: 'Unknown error.',
        invalidYtId: 'Invalid YouTube ID.',
        unknownYtId: 'Unable to find video with the given YouTube ID.',
        restrictedYt: 'The owner of this video does not allow it to be embedded.'
      }
    });

    parameters.a11y = parameters.a11y || [];
    parameters.playback = parameters.playback || {};
    parameters.visuals = parameters.visuals || {};

    /** @private */
    var sources = [];
    if (parameters.sources) {
      for (var i = 0; i < parameters.sources.length; i++) {
        // Clone to avoid changing of parameters.
        var source = $.extend(true, {}, parameters.sources[i]);

        // Create working URL without html entities.
        source.path = $cleaner.html(source.path).text();
        sources.push(source);
      }
    }

    /** @private */
    var tracks = [];
    parameters.a11y.forEach(function (track) {
      // Clone to avoid changing of parameters.
      var clone = $.extend(true, {}, track);

      // Create working URL without html entities
      if (clone.track && clone.track.path) {
        clone.track.path = $cleaner.html(clone.track.path).text();
        tracks.push(clone);
      }
    });

    /**
     * Attaches the video handler to the given container.
     * Inserts text if no handler is found.
     *
     * @public
     * @param {jQuery} $container
     */
    self.attach = function ($container) {
      $container.addClass('h5p-video').html('');

      if (self.appendTo !== undefined) {
        self.appendTo($container);
      }
      else {
        if (sources.length) {
          $container.text(parameters.l10n.noPlayers);
        }
        else {
          $container.text(parameters.l10n.noSources);
        }
      }
      // handle xapi consumed
      self.handleXAPI();
    };

    /**
     * Get name of the video handler
     *
     * @public
     * @returns {string}
     */
    self.getHandlerName = function() {
      return handlerName;
    };

    // Resize the video when we know its aspect ratio
    self.on('loaded', function () {
      self.trigger('resize');
    });

    /**
     * Get title, e.g. for xAPI.
     *
     * @return {string} Title.
     */
    self.getTitle = function () {
      return H5P.createTitle((self.extras && self.extras.metadata && self.extras.metadata.title) ? self.extras.metadata.title : 'Video');
    };

    /**
     * trigger XAPI based on activity if activity is CP then trigger after slide consumed else trigger on attach
     */
    self.handleXAPI = function () {
      // for CP trigger only on slide open for others trigger on attach
      if (self.extras.hasOwnProperty("parent") && self.extras.parent.hasOwnProperty("presentation")) {
        self.on('trigger-consumed', function () {
          self.triggerConsumed();
        });
      } else {
        self.triggerConsumed();
      }
    };

    // Event Received from CP Video
    self.on('trigger-consumed', function () {
      self.triggerXAPIConsumed();
    });

    /**
     * Trigger the 'consumed' xAPI event
     *
     */
    self.triggerXAPIConsumed = function () {
      var xAPIEvent = self.createXAPIEventTemplate({
        id: 'http://activitystrea.ms/schema/1.0/consume',
        display: {
          'en-US': 'consumed'
        }
      }, {
        result: {
          completion: true
        }
      });

      Object.assign(xAPIEvent.data.statement.object.definition, {
        name:{
          'en-US': self.getTitle()
        }
      });

      self.trigger(xAPIEvent);
    };

    // Find player for video sources
    if (sources.length) {
      var html5Handler;
      for (var i = 0; i < handlers.length; i++) {
        var handler = handlers[i];
        if (handler.canPlay !== undefined && handler.canPlay(sources)) {
          handler.call(self, sources, {
            controls: parameters.visuals.controls,
            autoplay: parameters.playback.autoplay,
            loop: parameters.playback.loop,
            fit: parameters.visuals.fit,
            poster: parameters.visuals.poster === undefined ? undefined : parameters.visuals.poster,
            startAt: parameters.startAt || 0,
            tracks: tracks,
            disableRemotePlayback: (parameters.visuals.disableRemotePlayback || false)
          }, parameters.l10n);
          handlerName = handler.name;
          return;
        }

        if (handler === H5P.VideoHtml5) {
          html5Handler = handler;
          handlerName = handler.name;
        }
      }

      // Fallback to trying HTML5 player
      if (html5Handler) {
        html5Handler.call(self, sources, {
          controls: parameters.visuals.controls,
          autoplay: parameters.playback.autoplay,
          loop: parameters.playback.loop,
          fit: parameters.visuals.fit,
          poster: parameters.visuals.poster === undefined ? undefined : parameters.visuals.poster,
          startAt: parameters.startAt || 0,
          tracks: tracks,
          disableRemotePlayback: (parameters.visuals.disableRemotePlayback || false)
        }, parameters.l10n);
      }
    } else if(parameters.brightcoveVideoID) {
      BrightcoveHandler = handlers.find(fn =>  fn.name ==='Brightcove');
      if (BrightcoveHandler !== undefined) {
        BrightcoveHandler.call(self, sources, {
          controls: parameters.visuals.controls,
          autoplay: parameters.playback.autoplay,
          loop: parameters.playback.loop,
          fit: parameters.visuals.fit,
          poster: parameters.visuals.poster === undefined ? undefined : parameters.visuals.poster,
          startAt: parameters.startAt || 0,
          tracks: tracks,
          disableRemotePlayback: (parameters.visuals.disableRemotePlayback || false),
          brightcoveVideoID: parameters.brightcoveVideoID
        }, parameters.l10n);
      }
    }
  }

  // Extends the event dispatcher
  Video.prototype = Object.create(H5P.EventDispatcher.prototype);
  Video.prototype.constructor = Video;

  // Player states
  /** @constant {Number} */
  Video.ENDED = 0;
  /** @constant {Number} */
  Video.PLAYING = 1;
  /** @constant {Number} */
  Video.PAUSED = 2;
  /** @constant {Number} */
  Video.BUFFERING = 3;
  /**
   * When video is queued to start
   * @constant {Number}
   */
  Video.VIDEO_CUED = 5;

  // Used to convert between html and text, since URLs have html entities.
  var $cleaner = H5P.jQuery('<div/>');

  /**
   * Help keep track of key value pairs used by the UI.
   *
   * @class
   * @param {string} label
   * @param {string} value
   */
  Video.LabelValue = function (label, value) {
    this.label = label;
    this.value = value;
  };

  /** @constant {Boolean} */
  Video.IE11_PLAYBACK_RATE_FIX = (navigator.userAgent.match(/Trident.*rv[ :]*11\./) ? true : false);

  return Video;
})(H5P.jQuery, H5P.ContentCopyrights, H5P.MediaCopyright, H5P.videoHandlers || []);
