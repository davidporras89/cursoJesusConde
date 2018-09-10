'use strict';

describe('Controller: MiembroCtrl', function () {

  // load the controller's module
  beforeEach(module('cursoJesusCondeApp'));

  var MiembroCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MiembroCtrl = $controller('MiembroCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
