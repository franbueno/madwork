define(function(require) {
  'use strict';

  var angular = require('angular');
  require('angularResource');
  require('angularRoute');
  require('angularBootstrap');
  require('angularBootstrapTemplate');
  require('angularMoment');  

  // angular module definition
  return angular.module(
    // module name
    'main',

    // module dependencies
    [
      'ngResource',
      'ngRoute',
      'ui.bootstrap',
      'angularMoment',

      require('app/commons/components/package').name,
    ]
  );

});
