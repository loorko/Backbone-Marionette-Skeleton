require( ['jquery',
          'marionette',
          'handlebars',
          'app',
          'i18next',
          'i18next-xhr-backend',
          'config/i18next',
          'helper/translate'],
function( $, Marionette, Handlebars, Application, i18next, i18nextXhrBackend, i18nextConfig, translate ) {
  
  Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate) {
    return Handlebars.compile(rawTemplate);
  };
  
  window.App = new Application();
  
  App.i18next = i18next || 'hu';
  App.i18next.use(i18nextXhrBackend).init(i18nextConfig);
  App.i18next.on('loaded', function() {
    App.start();
  });
  
});