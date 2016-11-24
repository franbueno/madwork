define(function(require) {
  'use strict';

  var module = require('../module');

  module.controller('SearchCtrl', SearchCtrl);

  //---

  SearchCtrl.$inject = ['$location', '$anchorScroll', 'NavBarService', 'MadworkResource', 'moment', '$filter'];

  function SearchCtrl($location, $anchorScroll, NavBarService, dataService, moment, $filter) {
    
    var vm = this;
    vm.searchField = '';
    vm.bestFiction = '';
    vm.booksAbout = '';
    vm.currentPage = 1;
    vm.totalPages = 0;
    vm.numPerPage = 12;
    vm.filteredBooks = [];

    // update search menu option url
    NavBarService.updateSearchUrl('/');

    // get data
    dataService.getData(function(data){
      vm.books = data;
      vm.search();
    });

    // redirect to book details
    vm.detailBook = function(id) {
      $location.path('/' + id);
    };

    vm.search = function() {
      vm.filteredBooks = $filter('filter')(vm.books, function(value){
        if((value.name.toLowerCase().indexOf(vm.searchField) !== -1) || (value.author.name.toLowerCase().indexOf(vm.searchField) !== -1))
          return value;
      });

      //Filter for category
      if (vm.booksAbout !== '') {
        vm.filteredBooks = $filter('filter')(vm.filteredBooks, {genre:{name:vm.booksAbout}});
      }

      //Filter for "Find my best"
      if (vm.bestFiction !== '') {
        vm.filteredBooks = $filter('filter')(vm.filteredBooks, {genre:{category:vm.bestFiction}}, true);
        vm.filteredBooks = $filter('orderBy')(vm.filteredBooks, 'likes', true);
      }

      vm.totalPages = vm.filteredBooks.length;

      //Manage pagination
      var begin = ((vm.currentPage - 1) * vm.numPerPage);
      var end = begin + vm.numPerPage;
      vm.filteredBooksPage = vm.filteredBooks.slice(begin, end);

      vm.currentPage = 1;
    };

    //Update view list
    vm.pageChanged = function() {
      var begin = ((vm.currentPage - 1) * vm.numPerPage);
      var end = begin + vm.numPerPage;
      
      vm.filteredBooksPage = vm.filteredBooks.slice(begin, end);

      $location.hash('app');
      $anchorScroll();
    };

  }

});
