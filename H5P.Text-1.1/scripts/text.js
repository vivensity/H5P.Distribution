var H5P = H5P || {};

/**
 * Constructor.
 *
 * @param {object} params Options for this library.
 */
H5P.Text = function (params) {
  this.text = params.text === undefined ? '<em>New text</em>' : params.text;
};

/**
 * Wipe out the content of the wrapper and put our HTML in it.
 *
 * @param {jQuery} $wrapper
 */
H5P.Text.prototype.attach = function ($wrapper) {
  $wrapper.addClass('h5p-text').html(this.text);
  this.triggerConsumed();
};

/**
 * Trigger the 'consumed' xAPI event when this commences
 *
 */
H5P.Text.prototype.triggerConsumed = function () {
  var xAPIEvent = this.createXAPIEventTemplate({
    id: 'http://activitystrea.ms/schema/1.0/consume',
    display: {
      'en-US': 'consumed'
    }
  }, {
    result: {
      completion: true
    }
  });
  this.trigger(xAPIEvent);
};
