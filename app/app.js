(function () {
  'use strict';

  // Declare app level module which depends on views, and components
  angular.module('baltcoGo', [
    'ngRoute',
    'baltcoGo.viewer',
    'baltcoGo.reporter',
    'myApp.version'
  ]).
    config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.otherwise({ redirectTo: '/reporter' });
    }]);
})();

