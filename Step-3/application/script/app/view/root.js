define([
  'marionette',
  'handlebars',
  'text!template/root.html'
  ],
function( Marionette, Handlebars, tmpl ) {
  var RootView = Marionette.View.extend({
    template: function() {
      return Handlebars.compile(tmpl)( { content: 'Backbone + Marionnet + Handlebar + Requirejs' } );
    }
  });
  return RootView;
});