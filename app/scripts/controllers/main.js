'use strict';

/**
 * @ngdoc function
 * @name cursoJesusCondeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cursoJesusCondeApp
 */
angular.module('cursoJesusCondeApp')
  .controller('MainCtrl', function ($scope) {
  var baseURL='https://picsum.photos/960/450/';
  $scope.setInterval=5000;

  $scope.slides=[
    {
      title:'Aprende a mantenerte en forma',
      image:baseURL+'?sport',
      text:'¡Practica algún deporte todos los días!'
    },
    {
      title:'Buena alimentacion',
      image:baseURL+'?foot',
      text:'¡La importancia de frutas y verduras!'
    },
    {
      title:'En contacto con la naturaleza',
      image:baseURL+'?nature',
      text:'¡Mantente en armonía con la naturaleza!'
    }
  ];
  var baseURL='https://picsum.photos/200/200/';
  $scope.contenido=[
    {
      title:'Sobre Nosotros',
      img:baseURL+'?people',
      sumario:'Somos una empresa comprometida con la vida sana'
    },
    {
      title:'Nuestros Servicios',
      img:baseURL+'?business',
      sumario:'Ofrecemos asesoría profesional para mantenerse sano!'
    },
    {
      title:'Contáctenos',
      img:baseURL+'?transport',
      sumario:'Cll 32 b # 55-44, Medellín Colombia'
    }
  ];



  });
