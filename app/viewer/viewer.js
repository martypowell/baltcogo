'use strict';

angular.module('baltcoGo.viewer', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewer', {
    templateUrl: 'viewer/viewer.html',
    controller: 'ViewerCtrl'
  });
}])

.controller('ViewerCtrl', [function() {

}]);