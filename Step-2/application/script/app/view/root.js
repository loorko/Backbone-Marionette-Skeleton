define([
  'marionette',
  'handlebars',
  'text!template/root.html'
  ],
function( Marionette, Handlebars, tmpl ) {
  var RootView = Marionette.View.extend({
    template: function() {
      return Handlebars.compile(tmpl)( {title: 'Welcome', subTitle: 'Backbone Marionette skeleton', content: 'This is a Backbone + Marionnet + Handlebar + Requirejs example'} );
    }
  });
  return RootView;
});