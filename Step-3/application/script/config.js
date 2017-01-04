require.config({
  paths: {
    // define application paths
    'app'                 : 'app',
    'model'               : 'app/model',
    'colletion'           : 'app/colletion',
    'view'                : 'app/view',
    'template'            : 'app/template',
     // define vendor paths
     // libraries
    'jquery'              : 'vendor/lib/jquery/jquery.min',
    'underscore'          : 'vendor/lib/underscore/underscore-min',
    'backbone'            : 'vendor/lib/backbone/backbone-min',
    'marionette'          : 'vendor/lib/backbone.marionette/backbone.marionette.min',
    'backbone.radio'      : 'vendor/lib/backbone.radio/backbone.radio',
    'handlebars'          : 'vendor/lib/handlebars/handlebars.min',
    // plugins
    'text'                : 'vendor/lib/text/text',
    'i18next'             : 'vendor/lib/i18next/i18next.min',
    'i18next-xhr-backend' : 'vendor/lib/i18next-xhr-backend/i18nextXHRBackend.min',
    // config
    'config'              : 'app/config'
  },
  shim: {
    'jquery': {
      exports: '$'
    },
    'underscore': {
      exports: '_'
    },
    'backbone': {
      exports:  'Backbone',
      deps:   [ 'jquery', 'underscore' ]
    },
    'backbone.radio': {
      exports:  'Backbone.Radio',
      deps:   [ 'backbone' ]
    },
    'marionette': {
      exports:  'Marionette',
      deps:   [ 'underscore', 'backbone', 'jquery']
    },
    'handlebars': {
      exports:  'Handlebars',
      deps:   []
    },
    'i18next': {
      exports:  'i18next',
      deps:   [ 'i18next-xhr-backend' ]
    }
  }
});
require(['main']);