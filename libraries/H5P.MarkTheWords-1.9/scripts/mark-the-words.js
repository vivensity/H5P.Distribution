/*global H5P*/

/**
 * Mark The Words module
 * @external {jQuery} $ H5P.jQuery
 */
 H5P.MarkTheWords = (function ($, Question, Word, KeyboardNav, XapiGenerator) {
  /**
   * Initialize module.
   *
   * @class H5P.MarkTheWords
   * @extends H5P.Question
   * @param {Object} params Behavior settings
   * @param {Number} contentId Content identification
   * @param {Object} contentData Object containing task specific content data
   *
   * @returns {Object} MarkTheWords Mark the words instance
   */
  function MarkTheWords(params, contentId, contentData) {
    var self = this;
    this.contentId = contentId;
    this.contentData = contentData;
    this.introductionId = 'mark-the-words-introduction-' + contentId;

    Question.call(this, 'mark-the-words');

    // Set default behavior.
    this.params = $.extend(true, {
      taskDescription: "",
      textField: "This is a *nice*, *flexible* content type.",
      overallFeedback: [],
      behaviour: {
        enableRetry: true,
        enableSolutionsButton: true,
        enableCheckButton: true,
        showScorePoints: true
      },
      checkAnswerButton: "Check",
      tryAgainButton: "Retry",
      showSolutionButton: "Show solution",
      viewSummary: "View Summary",
      correctAnswer: "Correct!",
      incorrectAnswer: "Incorrect!",
      missedAnswer: "Answer not found!",
      displaySolutionDescription:  "Task is updated to contain the solution.",
      scoreBarLabel: 'You got :num out of :total points',
      a11yFullTextLabel: 'Full readable text',
      a11yClickableTextLabel: 'Full text where words can be marked',
      a11ySolutionModeHeader: 'Solution mode',
      a11yCheckingHeader: 'Checking mode',
      a11yCheck: 'Check the answers. The responses will be marked as correct, incorrect, or unanswered.',
      a11yShowSolution: 'Show the solution. The task will be marked with its correct solution.',
      a11yRetry: 'Retry the task. Reset all responses and start the task over again.',
      currikisettings: {
        disableSubmitButton: false,
        currikil10n: {
          submitAnswer: "Submit"
        }
      },
    }, params);

    this.contentData = contentData;
    if (this.contentData !== undefined && this.contentData.previousState !== undefined) {
      this.previousState = this.contentData.previousState;
    }

    this.keyboardNavigators = [];

    this.initMarkTheWords();
    this.XapiGenerator = new XapiGenerator(this);
  }

  MarkTheWords.prototype = Object.create(H5P.EventDispatcher.prototype);
  MarkTheWords.prototype.constructor = MarkTheWords;

  /**
   * Initialize Mark The Words task
   */
  MarkTheWords.prototype.initMarkTheWords = function () {
    this.$inner = $('<div class="h5p-word-inner"></div>');

    this.addTaskTo(this.$inner);

    // Set user state
    this.setH5PUserState();

    // check is parent is IV or QS, if so then on open then activity will be started
    const isEmbedInComplexActivity = this.contentData && this.contentData.parent && this.contentData.parent.contentData
      && this.contentData.parent.contentData.metadata && this.contentData.parent.contentData.metadata.contentType
        && ['Interactive Video', 'Brightcove Interactive Video', 'Question Set'].includes(this.contentData.parent.contentData.metadata.contentType);

    if(!isEmbedInComplexActivity) {
      // for XAPI duration
      this.activityStartTime = Date.now();
    }

  };

  /**
   * Recursive function that creates html for the words
   * @method createHtmlForWords
   * @param  {Array}           nodes Array of dom nodes
   * @return {string}
   */
  MarkTheWords.prototype.createHtmlForWords = function (nodes) {
    var self = this;
    var html = '';
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];

      if (node instanceof Text) {
        var text = $(node).text();
        var selectableStrings = text.replace(/(&nbsp;|\r\n|\n|\r)/g, ' ')
          .match(/ \*[^\* ]+\* |[^\s]+/g);

        if (selectableStrings) {
          selectableStrings.forEach(function (entry) {
            entry = entry.trim();

            // Words
            if (html) {
              // Add space before
              html += ' ';
            }

            // Remove prefix punctuations from word
            var prefix = entry.match(/^[\[\({⟨¿¡“"«„]+/);
            var start = 0;
            if (prefix !== null) {
              start = prefix[0].length;
              html += prefix;
            }

            // Remove suffix punctuations from word
            var suffix = entry.match(/[",….:;?!\]\)}⟩»”]+$/);
            var end = entry.length - start;
            if (suffix !== null) {
              end -= suffix[0].length;
            }

            // Word
            entry = entry.substr(start, end);
            if (entry.length) {
              html += '<span role="option" aria-selected="false">' + self.escapeHTML(entry) + '</span>';
            }

            if (suffix !== null) {
              html += suffix;
            }
          });
        }
        else if ((selectableStrings !== null) && text.length) {
          html += '<span role="option" aria-selected="false">' + this.escapeHTML(text) + '</span>';
        }
      }
      else {
        if (node.nodeName === 'BR') {
          html += '<br/>';
        }
        else {
          var attributes = ' ';
          for (var j = 0; j < node.attributes.length; j++) {
            attributes +=node.attributes[j].name + '="' + node.attributes[j].nodeValue + '" ';
          }
          html += '<' + node.nodeName +  attributes + '>';
          html += self.createHtmlForWords(node.childNodes);
          html += '</' + node.nodeName + '>';
        }
      }
    }

    return html;
  };

  /**
   * Escapes HTML
   *
   * @param html
   * @returns {jQuery}
   */
  MarkTheWords.prototype.escapeHTML = function (html) {
    return $('<div>').text(html).html();
  };

  /**
   * Search for the last children in every paragraph and
   * return their indexes in an array
   *
   * @returns {Array}
   */
  MarkTheWords.prototype.getIndexesOfLineBreaks = function () {

    var indexes = [];
    var selectables = this.$wordContainer.find('span.h5p-word-selectable');

    selectables.each(function(index, selectable) {
      if ($(selectable).next().is('br')){
        indexes.push(index);
      }

      if ($(selectable).parent('p') && !$(selectable).parent().is(':last-child') && $(selectable).is(':last-child')){
        indexes.push(index);
      }
    });

    return indexes;
  };

  /**
   * Handle task and add it to container.
   * @param {jQuery} $container The object which our task will attach to.
   */
  MarkTheWords.prototype.addTaskTo = function ($container) {
    var self = this;
    self.selectableWords = [];
    self.answers = 0;

    // Wrapper
    var $wordContainer = $('<div/>', {
      'class': 'h5p-word-selectable-words',
      'aria-labelledby': self.introductionId,
      'aria-multiselectable': 'true',
      'role': 'listbox',
      html: self.createHtmlForWords($.parseHTML(self.params.textField))
    });

    let isNewParagraph = true;
    $wordContainer.find('[role="option"], br').each(function () {
      if ($(this).is('br')) {
        isNewParagraph = true;
        return;
      }

      if (isNewParagraph) {
        // Add keyboard navigation helper
        self.currentKeyboardNavigator = new KeyboardNav();

        // on word clicked
        self.currentKeyboardNavigator.on('select', function () {
          self.isAnswered = true;
          self.triggerXAPI('interacted');
        });

        self.keyboardNavigators.push(self.currentKeyboardNavigator);
        isNewParagraph = false;
      }
      self.currentKeyboardNavigator.addElement(this);

      // Add keyboard navigation to this element
      var selectableWord = new Word($(this), self.params);
      if (selectableWord.isAnswer()) {
        self.answers += 1;
      }
      self.selectableWords.push(selectableWord);
    });

    self.blankIsCorrect = (self.answers === 0);
    if (self.blankIsCorrect) {
      self.answers = 1;
    }

    // A11y full readable text
    const $ariaTextWrapper = $('<div>', {
      'class': 'hidden-but-read',
    }).appendTo($container);
    $('<div>', {
      html: self.params.a11yFullTextLabel,
    }).appendTo($ariaTextWrapper);

    // Add space after each paragraph to read the sentences better
    const ariaText = $('<div>', {
      'html': $wordContainer.html().replace('</p>', ' </p>'),
    }).text();

    $('<div>', {
      text: ariaText,
    }).appendTo($ariaTextWrapper);

    // A11y clickable list label
    this.$a11yClickableTextLabel = $('<div>', {
      'class': 'hidden-but-read',
      html: self.params.a11yClickableTextLabel,
      tabIndex: '-1',
    }).appendTo($container);

    $wordContainer.appendTo($container);
    self.$wordContainer = $wordContainer;
  };

  /**
   * Add check solution and retry buttons.
   */
  MarkTheWords.prototype.addButtons = function () {
    var self = this;
    self.$buttonContainer = $('<div/>', {
      'class': 'h5p-button-bar'
    });

    if (this.params.behaviour.enableCheckButton) {
      this.addButton('check-answer', "Check Answers", function () {
        self.isAnswered = true;
        var answers = self.calculateScore();
        self.feedbackSelectedWords();
        var txt = "";

        if (!self.showEvaluation(answers)) {
          // Only show if a correct answer was not found.
          if (self.params.behaviour.enableSolutionsButton && (answers.correct < self.answers)) {
            self.showButton('show-solution');
          }
          if (self.params.behaviour.enableRetry) {
            self.showButton('try-again');
          }
        }

        if (!self.params.currikisettings.disableSubmitButton && typeof self.parent == "undefined") {
          self.showButton('submit-answer');
        }

        // Set focus to start of text
        self.$a11yClickableTextLabel.html(self.params.a11yCheckingHeader + ' - ' + self.params.a11yClickableTextLabel);
        self.$a11yClickableTextLabel.focus();

        self.hideButton('check-answer');
        self.trigger(self.XapiGenerator.generateAnsweredEvent());

        if (typeof self.parent == "undefined") {
          self.triggerXAPICompleted(self.getScore(), self.getMaxScore());
        }
        self.toggleSelectable(true);
      }, true, {
        'aria-label': this.params.a11yCheck,
      });
      /* start code addd by dev_ln*/
      /*if(typeof this.parent == "undefined") {
        this.addButton('view-summary', this.params.viewSummary, function () { 
            var answers = self.calculateScore();
            var total_score = self.getMaxScore();
            var scored_result = self.getScore();

            var user_response = self.XapiGenerator.generateAnsweredEvent().data.statement.result.responsetext;
            var correct_response = self.XapiGenerator.generateAnsweredEvent().data.statement.object.definition.getCorrectResponsesPatternText;
            console.log(correct_response);
            var confirmationDialog = new H5P.ConfirmationDialog({
              headerText: 'Marks the word summary',
              dialogText: showSummary(this,answers,total_score,scored_result,user_response,correct_response),
              cancelText: 'Cancel',
              confirmText: "Submit Answers"
            });
            
            confirmationDialog.on('confirmed', function () {
               self.triggerXAPIScored(0, 1, 'submitted-curriki');
              //confirmationDialog.hide();
              H5P.jQuery('.h5p-question-check-answer').click();
              
            });

            confirmationDialog.appendTo(parent.document.body);
            confirmationDialog.show();
          // console.log(self.trigger(self.XapiGenerator.generateAnsweredEvent()));
        }, true, {
          'aria-label': this.params.a11yCheck,
        });
        
      }*/
      /*end code addd by dev_ln*/
    }

    this.addButton('try-again', this.params.tryAgainButton, this.resetTask.bind(this), false, {
      'aria-label': this.params.a11yRetry,
    });

    this.addButton('show-solution', this.params.showSolutionButton, function () {
      self.setAllMarks();

      self.solutionMode = true;
      self.$a11yClickableTextLabel.html(self.params.a11ySolutionModeHeader + ' - ' + self.params.a11yClickableTextLabel);
      self.$a11yClickableTextLabel.focus();

      if (self.params.behaviour.enableRetry) {
        self.showButton('try-again');
      }
      self.hideButton('check-answer');
      self.hideButton('show-solution');

      if(self.isSubmitted) {
        self.hideButton('submit-answer');
        self.removeSubmitAnswerFeedback();
      }

      self.read(self.params.displaySolutionDescription);
      self.toggleSelectable(true);
    }, false, {
      'aria-label': this.params.a11yShowSolution,
    });

    if (!this.params.currikisettings.disableSubmitButton && typeof self.parent == "undefined") {
      this.addButton('submit-answer', this.params.currikisettings.currikil10n.submitAnswer, function () {
        self.isSubmitted = true;
        self.hideButton('submit-answer');
        if(self.solutionMode) {
          self.hideButton('show-solution');
        }
        self.triggerXAPIScored(self.getScore(), self.getMaxScore(), 'submitted-curriki');
        // var $submit_message = '<div class="submit-answer-feedback" style = "color: red">Result has been submitted successfully</div>';
        // H5P.jQuery('.h5p-question-buttons').after($submit_message);
      }, false);
    }
  };

   /**
    * Remove submit answer feedback div
    */
   MarkTheWords.prototype.removeSubmitAnswerFeedback = function () {
     H5P.jQuery('.submit-answer-feedback').remove();
   };

  /*started code by dev_ln */
  function showSummary(self,answers,total_score,scored_result,user_response,correct_response) {

      var table_content = '<tbody>';
      var correct_response_rst = correct_response[0];
      var result = correct_response_rst.split("[,]");
      var res = user_response.split("[,]");
    
      var res = user_response.split("[,]");
      if(user_response.length > 0){
        for (var m =0; m < res.length; m++){
          
          var is_correct = $.inArray( res[m], result );
          if(is_correct == -1){
            var is_correct = "InCorrect";
          }else{
            var is_correct = "Correct";
          }
          table_content += '<tr>';
          table_content += '<td>'+res[m]+'</td>';
          table_content += '<td>'+is_correct+'</td>';
          table_content += '</tr>';

        
        
        }
        var summary_html = '<div class="custom-summary-section"><div class="h5p-summary-table-pages"><table class="h5p-score-table-custom" style="min-height:100px;width:100%"><thead><tr><th>Ans</th><th>Correct</th></tr></thead>'+table_content+'</table></div></div>';
        var table_content_overall_score = '<tbody>';
        table_content_overall_score += '<tr>';
        table_content_overall_score += '<td>'+answers.correct+'</td>';
        table_content_overall_score += '<td>'+answers.missed+'</td>';
        table_content_overall_score += '<td>'+answers.wrong+'</td>';
        table_content_overall_score += '<td>'+scored_result+'/ '+total_score+'</td>';
        table_content_overall_score += '</tr>';
       
        var overall_summary_html = '<div class="custom-summary-section"><div class="h5p-summary-table-pages"><table class="h5p-score-table-custom" style="min-height:100px;width:100%"><thead><tr><th>Correct Ans</th><th>Missed Qus</th><th>Wrong Attempt</th><th>Score</th></tr></thead>'+table_content_overall_score+'</table></div></div>';
        
        var correct_option_list_html = '<div class="custom-summary-section"><h1>Correct Words:</h1>';
        for (var m =0; m < result.length; m++){
          if(m == 0){
            correct_option_list_html += result[m];
          }else{
            correct_option_list_html += ','+result[m];
          }
          
        }  
        correct_option_list_html += '</div';

        var summary_html = summary_html.concat(overall_summary_html);
        var summary_html = summary_html.concat(correct_option_list_html);



      }else{
        var summary_html = '<div class="custom-summary-section"><b>Users not mark any word yet.</b></div>';
      }  

    
    // var summary_html = '<div class="custom-summary-section"><div class="h5p-summary-table-pages"><table class="h5p-score-table-custom" style="min-height:100px;width:100%"><thead><tr><th>Correct Ans</th><th>Missed Qus</th><th>Wrong Attempt</th><th>Score</th></tr></thead>'+table_content+'</table></div></div>';
    return summary_html;
  }
  /*end code by dev_ln */

  /**
   * Toggle whether words can be selected
   * @param {Boolean} disable
   */
  MarkTheWords.prototype.toggleSelectable = function (disable) {
    this.keyboardNavigators.forEach(function (navigator) {
      if (disable) {
        navigator.disableSelectability();
        navigator.removeAllTabbable();
      }
      else {
        navigator.enableSelectability();
        navigator.setTabbableAt((0));
      }
    });

    if (disable) {
      this.$wordContainer.removeAttr('aria-multiselectable').removeAttr('role');
    }
    else {
      this.$wordContainer.attr('aria-multiselectable', 'true')
        .attr('role', 'listbox');
    }
  };

   /**
    * Trigger xAPI completed event
    */
   MarkTheWords.prototype.triggerXAPICompleted = function (score, maxScore) {
     this.triggerXAPIScored(score, maxScore, 'completed');
   };

  /**
   * Get Xapi Data.
   *
   * @see used in contracts {@link https://h5p.org/documentation/developers/contracts#guides-header-6}
   * @return {Object}
   */
  MarkTheWords.prototype.getXAPIData = function () {
    return {
      statement: this.XapiGenerator.generateAnsweredEvent().data.statement
    };
  };

  /**
   * Mark the words as correct, wrong or missed.
   *
   * @fires MarkTheWords#resize
   */
  MarkTheWords.prototype.setAllMarks = function () {
    this.selectableWords.forEach(function (entry) {
      entry.markCheck();
      entry.clearScorePoint();
    });

    /**
     * Resize event
     *
     * @event MarkTheWords#resize
     */
    this.trigger('resize');
  };

  /**
   * Mark the selected words as correct or wrong.
   *
   * @fires MarkTheWords#resize
   */
  MarkTheWords.prototype.feedbackSelectedWords = function () {
    var self = this;

    var scorePoints;
    if (self.params.behaviour.showScorePoints) {
      scorePoints = new H5P.Question.ScorePoints();
    }

    this.selectableWords.forEach(function (entry) {
      if (entry.isSelected()) {
        entry.markCheck(scorePoints);
      }
    });

    this.$wordContainer.addClass('h5p-disable-hover');
    this.trigger('resize');
  };

  /**
   * Evaluate task and display score text for word markings.
   *
   * @fires MarkTheWords#resize
   * @return {Boolean} Returns true if maxScore was achieved.
   */
  MarkTheWords.prototype.showEvaluation = function (answers) {
    this.hideEvaluation();
    var score = answers.score;

    //replace editor variables with values, uses regexp to replace all instances.
    var scoreText = H5P.Question.determineOverallFeedback(this.params.overallFeedback, score / this.answers).replace(/@score/g, score.toString())
      .replace(/@total/g, this.answers.toString())
      .replace(/@correct/g, answers.correct.toString())
      .replace(/@wrong/g, answers.wrong.toString())
      .replace(/@missed/g, answers.missed.toString());

    this.setFeedback(scoreText, score, this.answers, this.params.scoreBarLabel);

    this.trigger('resize');
    return score === this.answers;
  };

  /**
   * Clear the evaluation text.
   *
   * @fires MarkTheWords#resize
   */
  MarkTheWords.prototype.hideEvaluation = function () {
    this.removeFeedback();
    this.trigger('resize');
  };

  /**
   * Calculate the score.
   *
   * @return {Answers}
   */
  MarkTheWords.prototype.calculateScore = function () {
    var self = this;

    /**
     * @typedef {Object} Answers
     * @property {number} correct The number of correct answers
     * @property {number} wrong The number of wrong answers
     * @property {number} missed The number of answers the user missed
     * @property {number} score The calculated score
     */
    var initial = {
      correct: 0,
      wrong: 0,
      missed: 0,
      score: 0
    };

    // iterate over words, and calculate score
    var answers = self.selectableWords.reduce(function (result, word) {
      
      if (word.isCorrect()) {
        result.correct++;
      }
      else if (word.isWrong()) {
        result.wrong++;
      }
      else if (word.isMissed()) {
        result.missed++;
      }

      return result;
    }, initial);

    // if no wrong answers, and black is correct
    if (answers.wrong === 0 && self.blankIsCorrect) {
      answers.correct = 1;
    }

    // no negative score
    answers.score = Math.max(answers.correct - answers.wrong, 0);
    
    return answers;
  };

  /**
   * Clear styling on marked words.
   *
   * @fires MarkTheWords#resize
   */
  MarkTheWords.prototype.clearAllMarks = function () {
    this.selectableWords.forEach(function (entry) {
      entry.markClear();
    });

    this.$wordContainer.removeClass('h5p-disable-hover');
    this.trigger('resize');
  };

  /**
   * Returns true if task is checked or a word has been clicked
   *
   * @see {@link https://h5p.org/documentation/developers/contracts|Needed for contracts.}
   * @returns {Boolean} Always returns true.
   */
  MarkTheWords.prototype.getAnswerGiven = function () {
    return this.blankIsCorrect ? true : this.isAnswered;
  };

  /**
   * Counts the score, which is correct answers subtracted by wrong answers.
   *
   * @see {@link https://h5p.org/documentation/developers/contracts|Needed for contracts.}
   * @returns {Number} score The amount of points achieved.
   */
  MarkTheWords.prototype.getScore = function () {
    return this.calculateScore().score;
  };

  /**
   * Gets max score for this task.
   *
   * @see {@link https://h5p.org/documentation/developers/contracts|Needed for contracts.}
   * @returns {Number} maxScore The maximum amount of points achievable.
   */
  MarkTheWords.prototype.getMaxScore = function () {
    return this.answers;
  };

  /**
   * Get title
   * @returns {string}
   */
  MarkTheWords.prototype.getTitle = function () {
    return H5P.createTitle((this.contentData && this.contentData.metadata && this.contentData.metadata.title) ? this.contentData.metadata.title : 'Mark the Words');
  };

  /**
   * Display the evaluation of the task, with proper markings.
   *
   * @fires MarkTheWords#resize
   * @see {@link https://h5p.org/documentation/developers/contracts|Needed for contracts.}
   */
  MarkTheWords.prototype.showSolutions = function () {
    var answers = this.calculateScore();
    this.showEvaluation(answers);
    this.setAllMarks();
    this.read(this.params.displaySolutionDescription);
    this.hideButton('try-again');
    this.hideButton('show-solution');
    this.hideButton('check-answer');
    this.$a11yClickableTextLabel.html(this.params.a11ySolutionModeHeader + ' - ' + this.params.a11yClickableTextLabel);

    this.toggleSelectable(true);
    this.trigger('resize');
  };

  /**
   * Resets the task back to its' initial state.
   *
   * @fires MarkTheWords#resize
   * @see {@link https://h5p.org/documentation/developers/contracts|Needed for contracts.}
   */
  MarkTheWords.prototype.resetTask = function () {
    this.isAnswered = false;
    this.isSubmitted = false;
    this.solutionMode = false;
    this.clearAllMarks();
    this.hideEvaluation();
    this.removeSubmitAnswerFeedback();
    /* XAPI restart the activityStartTime */
    this.activityStartTime = Date.now();
    this.hideButton('try-again');
    this.hideButton('show-solution');
    this.hideButton('submit-answer');
    this.showButton('check-answer');
    this.$a11yClickableTextLabel.html(this.params.a11yClickableTextLabel);

    this.toggleSelectable(false);
    this.trigger('resize');
  };

  /**
   * Returns an object containing the selected words
   *
   * @public
   * @returns {object} containing indexes of selected words
   */
  MarkTheWords.prototype.getCurrentState = function () {
    var selectedWordsIndexes = [];
    if (this.selectableWords === undefined) {
      return undefined;
    }

    this.selectableWords.forEach(function (selectableWord, swIndex) {
      if (selectableWord.isSelected()) {
        selectedWordsIndexes.push(swIndex);
      }
    });
    return selectedWordsIndexes;
  };

  /**
   * Sets answers to current user state
   */
  MarkTheWords.prototype.setH5PUserState = function () {
    var self = this;

    // Do nothing if user state is undefined
    if (this.previousState === undefined || this.previousState.length === undefined) {
      return;
    }

    // Select words from user state
    this.previousState.forEach(function (answeredWordIndex) {
      if (isNaN(answeredWordIndex) || answeredWordIndex >= self.selectableWords.length || answeredWordIndex < 0) {
        throw new Error('Stored user state is invalid');
      }
      self.selectableWords[answeredWordIndex].setSelected();
    });
  };

  /**
   * Register dom elements
   *
   * @see {@link https://github.com/h5p/h5p-question/blob/1558b6144333a431dd71e61c7021d0126b18e252/scripts/question.js#L1236|Called from H5P.Question}
   */
  MarkTheWords.prototype.registerDomElements = function () {
    // wrap introduction in div with id
    var introduction = '<div id="' + this.introductionId + '">' + this.params.taskDescription + '</div>';

    // Register description
    this.setIntroduction(introduction);

    // creates aria descriptions for correct/incorrect/missed
    this.createDescriptionsDom().appendTo(this.$inner);

    // Register content
    this.setContent(this.$inner, {
      'class': 'h5p-word'
    });

    // Register buttons
    this.addButtons();
  };

  /**
   * Creates dom with description to be used with aria-describedby
   * @return {jQuery}
   */
  MarkTheWords.prototype.createDescriptionsDom = function () {
    var self = this;
    var $el = $('<div class="h5p-mark-the-words-descriptions"></div>');

    $('<div id="' + Word.ID_MARK_CORRECT + '">' + self.params.correctAnswer + '</div>').appendTo($el);
    $('<div id="' + Word.ID_MARK_INCORRECT + '">' + self.params.incorrectAnswer + '</div>').appendTo($el);
    $('<div id="' + Word.ID_MARK_MISSED + '">' + self.params.missedAnswer + '</div>').appendTo($el);

    return $el;
  };

  return MarkTheWords;
}(H5P.jQuery, H5P.Question, H5P.MarkTheWords.Word, H5P.KeyboardNav, H5P.MarkTheWords.XapiGenerator));

/**
 * Static utility method for parsing H5P.MarkTheWords content item questions
 * into format useful for generating reports.
 * 
 * Example input: "<p lang=\"en\">I like *pizza* and *burgers*.</p>"
 * 
 * Produces the following:
 * [
 *   {
 *     type: 'text',
 *     content: 'I like '
 *   },
 *   {
 *     type: 'answer',
 *     correct: 'pizza',
 *   },
 *   {
 *     type: 'text',
 *     content: ' and ',
 *   },
 *   {
 *     type: 'answer',
 *     correct: 'burgers'
 *   },
 *   {
 *     type: 'text',
 *     content: '.'
 *   }
 * ]
 * 
 * @param {string} question MarkTheWords textField (html)
 */
H5P.MarkTheWords.parseText = function (question) {

  /**
   * Separate all words surrounded by a space and an asterisk and any other
   * sequence of non-whitespace characters from str into an array.
   * 
   * @param {string} str 
   * @returns {string[]} array of all words in the given string
   */
  function getWords(str) { 
    return str.match(/ \*[^\*]+\* |[^\s]+/g);
  }

  /**
   * Replace each HTML tag in str with the provided value and return the resulting string
   * 
   * Regexp expression explained:
   *   <     - first character is '<'
   *   [^>]* - followed by zero or more occurences of any character except '>'
   *   >     - last character is '>'
   **/ 
  function replaceHtmlTags(str, value) {
    return str.replace(/<[^>]*>/g, value);
  }

  function startsAndEndsWith(char, str) {
    return str.startsWith(char) && str.endsWith(char);
  };

  function removeLeadingPunctuation(str) {
    return str.replace(/^[\[\({⟨¿¡“"«„]+/, '');
  };

  function removeTrailingPunctuation(str) {
    return str.replace(/[",….:;?!\]\)}⟩»”]+$/, '');
  };

  /**
   * Escape double asterisks ** = *, and remove single asterisk.
   * @param {string} str 
   */
  function handleAsterisks(str) {
    var asteriskIndex = str.indexOf('*');

    while (asteriskIndex !== -1) {
      str = str.slice(0, asteriskIndex) + str.slice(asteriskIndex + 1, str.length);
      asteriskIndex = str.indexOf('*', asteriskIndex + 1);
    }
    return str;
  };

  /**
   * Decode HTML entities (e.g. &nbsp;) from the given string using the DOM API
   * @param {string} str 
   */
  function decodeHtmlEntities(str) {
    const el = document.createElement('textarea');
    el.innerHTML = str;
    return el.value;
  };

  const wordsWithAsterisksNotRemovedYet = getWords(replaceHtmlTags(decodeHtmlEntities(question), ' '))
    .map(function(w) { return w.trim(); })
    .map(function(w) { return removeLeadingPunctuation(w); })
    .map(function(w) { return removeTrailingPunctuation(w); });
  
  const allSelectableWords = wordsWithAsterisksNotRemovedYet
    .map(function(w) { return handleAsterisks(w); });

  const correctWordIndexes = [];

  const correctWords = wordsWithAsterisksNotRemovedYet
    .filter(function(w, i) { 
      if (startsAndEndsWith('*', w)) {
        correctWordIndexes.push(i);
        return true;
      }
      return false;
    })
    .map(function(w) { return handleAsterisks(w); });
  
  const printableQuestion = replaceHtmlTags(decodeHtmlEntities(question), '')
    .replace('\xa0', '\x20');

  return {
    alternatives: allSelectableWords,
    correctWords: correctWords,
    correctWordIndexes: correctWordIndexes,
    textWithPlaceholders: printableQuestion.match(/[^\s]+/g)
      .reduce(function(textWithPlaceholders, word, index) {
        word = removeTrailingPunctuation(
          removeLeadingPunctuation(word));
        
        return textWithPlaceholders.replace(word, '%' + index);
      }, printableQuestion)
  };
};
