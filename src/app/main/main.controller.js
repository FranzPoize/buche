angular.module( 'buche' )
  .controller( 'MainCtrl', function ( $scope ) {
    $scope.login = function (loginForm) {
      alert('yeah login');
      loginForm.result = {$error: {credentials:true}};
      loginForm.loginInput.$error = {doesntExist:true};
      loginForm.passwordWarning = true;
    }

    $scope.register = function () {
      alert('yeah register');
    }
  });
