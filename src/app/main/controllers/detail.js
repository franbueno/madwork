define(function(require) {
  'use strict';

  var module = require('../module');

  module.controller('DetailCtrl', DetailCtrl);

  //---

  DetailCtrl.$inject = ['NavBarService', 'MadworkResource', '$location', '$routeParams', '$filter'];

  function DetailCtrl(NavBarService, dataService, $location, $routeParams, $filter) { // custom parameter scope name if you want
    var vm = this;
    vm.pageName = 'Detail Book';

    vm.currentBook = $routeParams.id;

    dataService.getData(function(data){
      vm.books = data;
      //Detail book
      vm.book = $filter('filter')(vm.books, {id:vm.currentBook}, true);
      console.log(vm.book);
      //Recomend books
      vm.booksRecommended = $filter('filter')(vm.books, {genre:{name:vm.book[0].genre.name}});
      vm.booksRecommended = $filter('filter')(vm.booksRecommended, {genre:{category:vm.book[0].genre.category}}, true);      
    });

    vm.detailBook = function(id) {
      $location.path('/' + id);
    };

    vm.random = function() {
      return 0.5 - Math.random();
    };

  }

});
