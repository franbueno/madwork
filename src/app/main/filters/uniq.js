define(function(require) {
  'use strict';

  var module = require('../module');

  module.filter('unique', function() {
   return function(collection, keyname) {
      var output = [], 
          keys = [];

      angular.forEach(collection, function(item) {


          var names = keyname.split(".");
          
          var name = item[names[0]];

          var key = name[names[1]];

          if(keys.indexOf(key) === -1) {
              keys.push(key);
              output.push(item);
          }
      });
      return output;
   };
});

});
