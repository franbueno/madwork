define(function(require) {
  'use strict';

  var module = require('../module');

  module.factory('NavBarService', NavBarService);

  //---

  // NavBarService.$inject = [ ];

  function NavBarService() {

    var nav = {
      showForkBelt: 'yes',
      searchUrlPath: '/',
      searchNotActive: '',
      aboutNotActive: 'x'
    };

    //---

    var service = {
      getNav: getNav,
      searchPageSelected: searchPageSelected,
      updateSearchUrl: updateSearchUrl
    };

    return service;

    //---

    function getNav() {
      return nav;
    }

    function searchPageSelected() {
      nav.searchNotActive = '';
      nav.aboutNotActive = 'x';
    }

    function updateSearchUrl(urlPath) {
      if('/' === urlPath) {
        nav.showForkBelt = 'yes';
      } else {
        nav.showForkBelt = undefined;
      }

      nav.searchUrlPath = urlPath;
      searchPageSelected();
    }

  }

});
