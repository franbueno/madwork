require({

  // libraries dependencies (fallback support)
  paths: {

    angular: [
      'libs/angular/angular.min'
    ],
    angularResource: [
      'libs/angular-resource/angular-resource.min'
    ],
    angularBootstrap: [
      'libs/angular-bootstrap/ui-bootstrap.min'
    ],
    angularBootstrapTemplate: [
      'libs/angular-bootstrap/ui-bootstrap-tpls.min'
    ],
    angularMoment: [
      'libs/angular-moment/angular-moment.min'
    ],
    angularRoute: [
      'libs/angular-route/angular-route.min'
    ],
    moment: [
      'libs/moment/moment.min'
    ]

  },

  // define js scripts dependencies
  shim: {

    'angular': {
      exports: 'angular'
    },

    'angularResource': {
      deps: ['angular']
    },

    'angularRoute': {
      deps: ['angular']
    },

    'angularBootstrap': {
      deps: ['angular']
    },

    'angularBootstrapTemplate': {
      deps: ['angularBootstrap']
    },

    'angularMoment': {
      deps: ['moment']
    }

  },

  priority: [
    'angular'
  ],

  deps: ['./ng.app']

});
