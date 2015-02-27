'use strict';

angular.module( 'buche' )
  .controller( 'BucheLoginCtrl', function ( $scope ) {
    $scope.login = function () {
      $scope.bucheLoginCb({loginForm:$scope.loginForm});
    }
  });
