define([ 'backbone' ],
function( Backbone ){
    var SignUpModel = Backbone.Model.extend({
      validation: {
        email: [{
          required: true,
          msg: 'Please enter an email address'
        },{
          pattern: 'email',
          msg: 'Please enter a valid email'
        }]
      }
    });
    return SignUpModel;
});