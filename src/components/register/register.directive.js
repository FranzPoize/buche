angular.module( 'buche' )
  .directive('bucheRegister',function () {
    return {
      scope: { 'bucheRegisterCb': '&' },
      restrict: 'EA',
      templateUrl: 'components/register/register.html',
      link: function ( $scope, $element, attrs ) {

      }
    }
  })
