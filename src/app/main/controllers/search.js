define(function(require) {
  'use strict';

  var module = require('../module');

  module.controller('SearchCtrl', SearchCtrl);

  //---

  SearchCtrl.$inject = ['$location', 'NavBarService', 'MadworkResource', 'moment', '$filter'];

  function SearchCtrl($location, NavBarService, dataService, moment, $filter) {
    
    var vm = this;
    vm.searchField = '';
    vm.bestFiction = '';
    vm.booksAbout = '';
    vm.currentPage = 1;
    vm.totalPages = 0;
    vm.numPerPage = 12;
    vm.filteredBooks = [];

    //---

    // update search menu option url
    NavBarService.updateSearchUrl('/');

    //---
    dataService.getData(function(data){
      vm.books = data;
      vm.search();
    });

    vm.detailBook = function(id) {
      $location.path('/' + id);
    };

    vm.search = function() {
      vm.filteredBooks = $filter('filter')(vm.books, {name:vm.searchField});
      
      //vm.filteredBooks = $filter('limitTo')(vm.books, vm.numPerPage);

      if (vm.booksAbout !== '') {
        vm.filteredBooks = $filter('filter')(vm.filteredBooks, {genre:{name:vm.booksAbout}});
      }

      if (vm.bestFiction !== '') {
        vm.filteredBooks = $filter('filter')(vm.filteredBooks, {genre:{category:vm.bestFiction}}, true);
        vm.filteredBooks = $filter('orderBy')(vm.filteredBooks, 'likes', true);
      }

      vm.totalPages = vm.filteredBooks.length;

      var begin = ((vm.currentPage - 1) * vm.numPerPage);
      var end = begin + vm.numPerPage;
      vm.filteredBooksPage = vm.filteredBooks.slice(begin, end);

      vm.currentPage = 1;
    };

    vm.pageChanged = function() {
      console.log(vm.currentPage);
      var begin = ((vm.currentPage - 1) * vm.numPerPage);
      var end = begin + vm.numPerPage;
      vm.filteredBooksPage = vm.filteredBooks.slice(begin, end);
    };

  }

});
