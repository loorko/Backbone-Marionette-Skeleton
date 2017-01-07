require( ['jquery',
          'marionette',
          'handlebars',
          'app',
          'i18next',
          'i18next-xhr-backend',
          'config/i18next' ],
function( $, Marionette, Handlebars, Application, i18next, i18nextXhrBackend, i18nextConfig ) {
  
  Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate) {
    return Handlebars.compile(rawTemplate);
  };
  
  Handlebars.registerHelper('t', function(i18n_key) {
    if(!i18n_key) { return i18n_key; }
    var result = App.i18next.t(i18n_key);
    return new Handlebars.SafeString(result);
  });
  
  window.App = new Application();
  
  App.i18next = i18next || 'hu';
  App.i18next.use(i18nextXhrBackend).init(i18nextConfig);
  App.i18next.on('loaded', function() {
    App.start();
  });
  
});