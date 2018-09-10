'use strict';

/**
 * @ngdoc function
 * @name cursoJesusCondeApp.controller:ArticulosCtrl
 * @description
 * # ArticulosCtrl
 * Controller of the cursoJesusCondeApp
 */
angular.module('cursoJesusCondeApp')
  .controller('ArticulosCtrl', function ($scope) {
    $scope.posts=[
      {
        title:'Alimentos buenos para la salud',
        content:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.'
      },
      {
        title:'Alimentos menos buenos para la salud',
        content:'Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera'
      },
      {
        title:'Limita tu cantidad de hidratos de carbono',
        content:'¡Mantente en armonía con la naturaleza!'
      }
    ];
  });
