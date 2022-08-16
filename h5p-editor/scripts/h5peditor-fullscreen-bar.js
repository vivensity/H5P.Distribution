/* global H5PEditor */
H5PEditor.FullscreenBar = (function ($) {
  function FullscreenBar ($mainForm, library) {

    const title = H5PEditor.libraryCache[library] ? H5PEditor.libraryCache[library].title : library;
    const iconId = library.split(' ')[0].split('.')[1].toLowerCase();

    let isInFullscreen = false;
    let exitSemiFullscreen;

    $mainForm.addClass('h5peditor-form-manager');

    // Add fullscreen bar
    const $bar = ns.$('<div/>', {
      'class': 'h5peditor-form-manager-head'
    })

    const $breadcrumb = ns.$('<div/>', {
      'class': 'h5peditor-form-manager-breadcrumb',
      appendTo: $bar
    });

    const $title = ns.$('<div/>', {
      'class': 'h5peditor-form-manager-title ' + iconId,
      text: title,
      appendTo: $breadcrumb
    });

    const fullscreenButton = createButton('fullscreen', '', function () {
      if (isInFullscreen) {
        // Trigger semi-fullscreen exit
        exitSemiFullscreen();
      }
      else {
        // Trigger semi-fullscreen enter
        exitSemiFullscreen = H5PEditor.semiFullscreen($mainForm, function () {
          fullscreenButton.setAttribute('aria-label', H5PEditor.t('core', 'exitFullscreenButtonLabel'));
          isInFullscreen = true;
        }, function () {
          fullscreenButton.setAttribute('aria-label', H5PEditor.t('core', 'enterFullscreenButtonLabel'))
          isInFullscreen = false;
        });
      }
    }, H5PEditor.t('core', 'enterFullscreenButtonLabel'));

    // Create 'Proceed to save' button
    const proceedButton = createButton('proceed', H5PEditor.t('core', 'proceedButtonLabel'), function () {
      exitSemiFullscreen();
    });

    // Create 'Preview to save' button
    const previewButton = createButton('preview', H5PEditor.t('core', 'previewButtonLabel'), function () {
          const self = this;
          loadLibraryWithAllDependencies(library, previewHandler);
    });

    // Create 'Back to Edit' button
    const backToEditButton = createButton('backToEdit', H5PEditor.t('core', 'backToEditLabel'), function () {

      const  previousPreviewWrapper = document.querySelector(".h5p-preview-wrapper");
      if(previousPreviewWrapper) {
        previousPreviewWrapper.remove();
      }
      hideOrDisplayEditorForm('display', $mainForm);

      previewButton.style.display = 'block';
      this.style.display = 'none';
    });

    backToEditButton.style.display = 'none';

    $bar.append(proceedButton);
    $bar.append(previewButton);
    $bar.append(backToEditButton);
    $bar.append(fullscreenButton);
    $mainForm.prepend($bar);

    // for setting content title
    return $title;
  }

  /**
   * Helper for creating buttons.
   *
   * @private
   * @param {string} id
   * @param {string} text
   * @param {function} clickHandler
   * @param {string} ariaLabel
   * @return {Element}
   */
  const createButton = function (id, text, clickHandler, ariaLabel) {
    if (ariaLabel === undefined) {
      ariaLabel = text;
    }

    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.classList.add('h5peditor-form-manager-button');
    button.classList.add('h5peditor-form-manager-' + id);
    button.setAttribute('aria-label', ariaLabel);
    button.addEventListener('click', clickHandler);

    // Create special inner filler to avoid focus from pointer devices.
    const content = document.createElement('span');
    content.classList.add('h5peditor-form-manager-button-inner');
    content.innerText = text
    content.tabIndex = -1;
    button.appendChild(content);

    return button;
  };

  const hideOrDisplayEditorForm = function (action, $mainForm) {
    if (action === 'hide') {
      $mainForm.find('.tree').css('display', 'none');
      H5P.jQuery('.h5peditor-form.h5peditor-form-manager>.common').css('display', 'none');
    } else if (action === 'display') {
      $mainForm.find('.tree').css('display', 'block');
      H5P.jQuery('.h5peditor-form.h5peditor-form-manager>.common').css('display', 'block');
    }
  };

  const loadLibraryWithAllDependencies = function (libraryName, callback) {
    switch (ns.libraryCache[libraryName]) {
      default:
        // Get semantics from cache.
        ns.libraryRequested(libraryName, callback);
        break;

      case 0:
        // Add to queue.
        if (ns.loadedCallbacks[libraryName] === undefined) {
          ns.loadedCallbacks[libraryName] = [];
        }
        ns.loadedCallbacks[libraryName].push(callback);
        break;

      case undefined:
        // Load dependencies.
        ns.libraryCache[libraryName] = 0; // Indicates that others should queue.
        ns.loadedCallbacks[libraryName] = []; // Other callbacks to run once loaded.
        const library = ns.libraryFromString(libraryName);

        let url = ns.getAjaxUrl('libraries/load-all-dependencies', library);

        // Add content language to URL
        if (ns.contentLanguage !== undefined) {
          url += (url.indexOf('?') === -1 ? '?' : '&') + 'language=' + ns.contentLanguage;
        }
        // Add common fields default lanuage to URL
        const defaultLanguage = ns.defaultLanguage; // Avoid changes after sending AJAX
        if (defaultLanguage !== undefined) {
          url += (url.indexOf('?') === -1 ? '?' : '&') + 'default-language=' + defaultLanguage;
        }

        // Fire away!
        ns.$.ajax({
          url: url,
          success: function (libraryData) {
            libraryData.translation = { // Used to cache all the translations
              en: libraryData.semantics
            };
            let languageSemantics = [];
            if (libraryData.language !== null) {
              languageSemantics = JSON.parse(libraryData.language).semantics;
              delete libraryData.language; // Avoid caching a lot of unused data
            }
            var semantics = ns.$.extend(true, [], libraryData.semantics, languageSemantics);
            if (libraryData.defaultLanguage !== null) {
              libraryData.translation[defaultLanguage] = JSON.parse(libraryData.defaultLanguage).semantics;
              delete libraryData.defaultLanguage; // Avoid caching a lot of unused data
              ns.updateCommonFieldsDefault(semantics, libraryData.translation[defaultLanguage]);
            }
            libraryData.semantics = semantics;
            ns.libraryCache[libraryName] = libraryData;

            ns.libraryRequested(libraryName, function (semantics) {
              callback(semantics);

              // Run queue.
              if (ns.loadedCallbacks[libraryName]) {
                for (var i = 0; i < ns.loadedCallbacks[libraryName].length; i++) {
                  ns.loadedCallbacks[libraryName][i](semantics);
                }
              }
            });
          },
          error: function (jqXHR, textStatus, errorThrown) {
            if (window['console'] !== undefined) {
              console.warn('Ajax request failed');
              console.warn(jqXHR);
              console.warn(textStatus);
              console.warn(errorThrown);
            }
          },
          dataType: 'json'
        });
    }
  };

    const previewHandler = function () {

      // hide preview button
      H5P.jQuery('.h5peditor-form-manager-backToEdit').css('display', 'block');
      H5P.jQuery('.h5peditor-form-manager-preview').css('display', 'none');

      // remove previous container
      const previousPreviewWrapper = document.querySelector(".h5p-preview-wrapper");
      if (previousPreviewWrapper) {
        previousPreviewWrapper.remove();
      }

      const previewWrapper = document.createElement('div');
      previewWrapper.classList.add('h5p-preview-wrapper');
      previewWrapper.classList.add('h5p-frame');

      const previewContainer = document.createElement('div');
      previewContainer.classList.add('preview-container');

      const previewContent = document.createElement('div');
      previewContent.classList.add('preview-content');

      previewContainer.append(previewContent);
      previewWrapper.append(previewContainer);

      let $mainForm = H5P.jQuery('.h5peditor-form.h5peditor-form-manager');
      $mainForm.find('.tree').after(previewWrapper);

      hideOrDisplayEditorForm('hide', $mainForm);
      try {
        H5P.newRunnable(
            {
              library: library,
              // params: window.parent.h5peditor.current.h5pEditor.current.editorInstance.getParams(true).params
              params: window.parent.h5peditorCopy.getParams(true).params
            },
            H5PEditor.contentId || 1,
            H5P.jQuery(previewContent)
        );
      } catch (e) {

      }
    };
  return FullscreenBar;
}(ns.jQuery));
