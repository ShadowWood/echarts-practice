'use strict';
require('angular');


(function () {
  require('angular-route');
  require('angular-material');
  // Declare app level module which depends on views, and components
  angular.module('myApp', [
    'ngRoute',
    'ngMaterial'
  ]).
  config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/'});
  }]);
})
