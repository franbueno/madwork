define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(configureRoutes);

  //--- https://docs.angularjs.org/api/ngRoute

  configureRoutes.$inject = ['$routeProvider'];

  function configureRoutes($routeProvider) {

    $routeProvider
      .when(
        '/',
        {
          templateUrl   : 'app/main/templates/search.html',
          controller    : 'SearchCtrl',
          controllerAs  : 'vm'
        }
      )
      .when(
        '/:id',
        {
          templateUrl   : 'app/main/templates/detail.html',
          controller    : 'DetailCtrl',
          controllerAs  : 'vm'
        }
      )
      .otherwise({redirectTo:'/'});

  }

});
