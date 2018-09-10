'use strict';

/**
 * @ngdoc function
 * @name cursoJesusCondeApp.controller:GaleriaCtrl
 * @description
 * # GaleriaCtrl
 * Controller of the cursoJesusCondeApp
 */
angular.module('cursoJesusCondeApp').controller('GaleriaCtrl', function ($scope) {
  var picture = $scope.picture=[];
  var baseURL="https://picsum.photos/300/180/";
  var titles=["Comida Sana","Salud y trabajo","Vida en la ciudad","Mantente activo","Cuida tu aspecto","¡¡Vida nocturna!"];
  var keywords=["?food","?bisiness","?city","?sports","?fashion","?nightlife"];
  var dummytext="El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo para aquellos interesados. Las secciones 1.10.32 y 1.10.33 de  por Cicero son también reproducidas en su forma original exacta, acompañadas por versiones en Inglés de la traducción realizada en 1914 por H. Rackham.";


  $scope.addPics=function(i){
    picture.push({
      url:baseURL+keywords[i],
      title:titles[i],
      summary:dummytext
    })
  }

  for(var i=0;i<5;i++){
    $scope.addPics(i);
  }

  $scope.rate =0;
  $scope.max = 5;
  $scope.isReadonly=false;

  });
