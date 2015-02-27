angular.module( 'buche' )
  .directive('bucheLogin',function () {
    return {
      scope: { 'bucheLoginCb': '&' },
      restrict: 'EA',
      templateUrl: 'components/login/login.html',
      controller: 'BucheLoginCtrl',
      link: function ( $scope, $element, attrs ) {

      }
    }
  })
