import angular from 'angular';
import 'angular-route';
import 'angular-material';
import _ from 'lodash';

import routes from './routes';

let echartsPracticeApp = angular.module('echartsPracticeApp', [
  'ngRoute',
  'ngMaterial'
])
  .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    _.map(routes, (route) => {
      $routeProvider.when({
        path: route.path,
        route: route.route
      })
    })

    $routeProvider.otherwise({redirectTo: '/'});
  }]);
