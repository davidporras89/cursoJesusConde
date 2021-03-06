'use strict';

/**
 * @ngdoc overview
 * @name cursoJesusCondeApp
 * @description
 * # cursoJesusCondeApp
 *
 * Main module of the application.
 */
angular
  .module('cursoJesusCondeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ngGrid',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/articulos', {
        templateUrl: 'views/articulos.html',
        controller: 'ArticulosCtrl'
      })
      .when('/galeria', {
        templateUrl: 'views/galeria.html',
        controller: 'GaleriaCtrl'
      })
      .when('/miembro', {
        templateUrl: 'views/miembro.html',
        controller: 'MiembroCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
