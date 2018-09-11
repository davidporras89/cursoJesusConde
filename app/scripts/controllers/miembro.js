'use strict';

/**
 * @ngdoc function
 * @name cursoJesusCondeApp.controller:MiembroCtrl
 * @description
 * # MiembroCtrl
 * Controller of the cursoJesusCondeApp
 */
angular.module('cursoJesusCondeApp')
  .controller('MiembroCtrl', function ($scope,$http) {
    $http.get('http://localhost:9000/miembros.json').success(function(data){
      $scope.miembros = data

    })
    $scope.gridOptions={
      data:'miembros'
    };

  });
