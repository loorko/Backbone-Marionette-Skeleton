require( ['jquery',
          'marionette',
          'handlebars',
          'app' ],
function( $, Marionette, Handlebars, Application ) {
  Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate) {
    return Handlebars.compile(rawTemplate);
  };
  window.App = new Application();
  App.start();
});