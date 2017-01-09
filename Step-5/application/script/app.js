define( ['jquery',
         'backbone',
         'marionette',
         'view/registration',
         'model/signUp'],
function( $, Backbone, Marionette, viewRegistration, modelSignUp ) {
  var Application = Backbone.Marionette.Application.extend({
    region: 'body',
    onStart: function() {
      this.showView(new viewRegistration({ model: new modelSignUp() }));
    }
  });
  return Application;
});