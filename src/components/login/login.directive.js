angular.module( 'buche' )
  .directive('bucheLogin',function () {
    return {
      scope: false,
      restrict: 'EA',
      templateUrl: 'components/login/login.html',
      controller: 'BucheLoginCtrl',
      link: function ( $scope, $element, attrs ) {
        $scope.bucheLogin = attrs.bucheLoginCb ? $scope[attrs.bucheLoginCb] : $scope.bucheLogin;
      }
    }
  })
