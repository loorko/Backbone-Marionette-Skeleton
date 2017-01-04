define( ['jquery',
         'backbone',
         'marionette',
         'view/root'],
function ($, Backbone, Marionette, viewRoot) {
  var Application = Backbone.Marionette.Application.extend({
    region: 'body',
    onStart: function() {
      this.showView(new viewRoot());
    }
  });
  return Application;
});