'use strict';

angular.module('baltcoGo.reporter', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/reporter', {
    templateUrl: 'reporter/reporter.html',
    controller: 'ReporterCtrl'
  });
}])

.controller('ReporterCtrl', [function() {

}]);