define([
  'backbone',
  'marionette',
  'handlebars', // http://handlebarsjs.com/
  'text!template/registration.html',
  'validation', // https://github.com/thedersen/backbone.validation
	'syphon',			// https://github.com/marionettejs/backbone.syphon
	'extend/validation'],
function( Backbone, Marionette, Handlebars, tmpl, Validation, Syphon, BootsrtapValidation ) {
	
  var RegistrationView = Marionette.View.extend({
    tagName		 	: 'div',
    className		:	'container-fluid',
    initialize	:	function(){
			Backbone.Validation.bind(this);
    },
    template: function() {
      return Handlebars.compile(tmpl)( { langSelect: ["Deutsch", "English", "Magyar"] } );
    },
    ui: {
      form		: '#signUpForm',
      signUp	: '#signUpButton'
    },
    events: {
      'click @ui.signUp': 'signUp'
    },
    signUp: function () {
			var formData = Backbone.Syphon.serialize( this.ui.form );
      this.model.set( formData, { validate: true } );
      if(this.model.isValid(true)){
        // this.model.save();
      }
    },
		remove: function() {
			Backbone.Validation.unbind(this);
		}
  });

	_.extend(Backbone.Validation.callbacks, BootsrtapValidation);

  return RegistrationView;
});