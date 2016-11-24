define(function(require) {
  'use strict';

  var module = require('./module');

  module.factory('MadworkResource', MadworkResource);

  //--- https://docs.angularjs.org/api/ngResource/service/

  MadworkResource.$inject = ['$resource'];

  function MadworkResource($resource) {

    return $resource('https://gist.githubusercontent.com/madwork/adfae25c174bb246c650/raw/db225e4b9c74e1865da1c9cd54cf87d3dee171a5/book.json',{ }, {
      getData: {method:'GET', isArray: true}
    });

  }

});
