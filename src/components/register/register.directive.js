angular.module( 'buche' )
  .directive('bucheRegister',function () {
    return {
      scope: false,
      restrict: 'EA',
      templateUrl: 'components/register/register.html',
      link: function ( $scope, $element, attrs ) {

      }
    }
  })
