Drupal.behaviors.trt = {

  /**
   * Behavior sample.
   * @param {(string|Object)} context - Execution context.
   *   Either an HTML markup or a DOM element. Called with document
   *   on the first load.
   * @param {Object} settings - Current drupalSettings data.
   */
  attach: function (context, settings) {
    console.log(context)
  }
};
