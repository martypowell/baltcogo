(function () {
  'use strict';

  // Declare app level module which depends on views, and components
  angular.module('baltcoGo', [
    'ngRoute',
    'baltcoGo.viewer', 
    'baltcoGo.report',
    'myApp.version'
  ]).
    config(['$locationProvider', '$routeProvider', 'urlsProvider', function ($locationProvider, $routeProvider, urlsProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.otherwise({ redirectTo: '/reporter' });

      var urls = [
        { "animal.breeds": 'data/animal-breeds.json' },
        { "animal.colors": 'data/animal-colors.json' },
        { "animal.types": 'data/animal-types.json' },
        { "categories": 'data/categories.json' },
        { "pet.types": 'data/pet-types.json' },
        { "report.create": "//testservices.baltimorecountymd.gov/api/baltcogo/createreport" },
        { "report.get": "//testservices.baltimorecountymd.gov/api/citysourced/getreport/" },
        { "reports.getByLatLng": "//testservices.baltimorecountymd.gov/api/citysourced/getreportsbylatlng" }
      ];
      urlsProvider.setUrls(urls);
    }]);
})();

