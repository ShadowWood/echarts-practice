import angular from 'angular';
import 'angular-route';
import 'angular-material';

let echartsPracticeApp = angular.module('echartsPracticeApp', [
  'ngRoute',
  'ngMaterial'
])
  .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/'});
  }]);

global.echartsPracticeApp = echartsPracticeApp;

