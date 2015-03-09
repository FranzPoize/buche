angular.module( 'buche' )
  .directive('bucheLogin',function () {
    return {
      scope: false,
      restrict: 'EA',
      templateUrl: 'components/login/login.html',
      controller: 'BucheLoginCtrl',
      link: function ( $scope, $element, attrs ) {
        $scope.lengthWasEnough = false;

        $scope.bucheLogin = attrs.bucheLoginCb ?
          $scope[attrs.bucheLoginCb] : $scope.bucheLogin;

        $scope.buchePasswordLength = attrs.buchePasswordLength ?
          parseInt(attrs.buchePasswordLength) :
          $scope.buchePasswordLength;

        $scope.forgotUsernameText = attrs.bucheForgotUsernameLn ?
          attrs.bucheForgotUsernameLn :
          "Forgotten your username ?";

        $scope.forgotPasswordText = attrs.bucheForgotPasswordText ?
          attrs.bucheForgotPasswordText :
          "Forgotten your password ?";

        $scope.checkPasswordForSecurity = attrs.bucheSecurityCheck ?
          $scope[bucheSecurityCheck] :
          function() { return false; };

        $scope.bucheLoginTooltipPlacement = attrs.bucheLoginTooltipPlacement ?
          attrs.bucheLoginTooltipPlacement :
          "right";

        $scope.buchePasswordTooltipPlacement = attrs.buchePasswordTooltipPlacement ?
          attrs.buchePasswordTooltipPlacement :
          "right";

        $scope.bucheLoginTooltipText = attrs.bucheLoginTooltipText ?
          attrs.bucheLoginTooltipText :
          "Tooltip text";

        $scope.buchePasswordTooltipText = attrs.buchePasswordTooltipText ?
          attrs.buchePasswordTooltipText :
          "Tooltip text";

        function setupTooltip( input ) {

          angular.element($element).find('input#'+input).on('focus',function() {

            angular.element(this).tooltip({container:'body',trigger:'focus'});
            angular.element(this).tooltip('show');
            angular.element(this).off('focus');

          });

        }

        if ( !attrs.bucheNoTooltip ) {

          if (!attrs.bucheLoginNoTooltip) {
            setupTooltip('loginInput');
          }

          if (!attrs.buchePasswordNoTooltip) {
            setupTooltip('passwordInput');
          }

        }

        $scope.$watch('buchePassword', function ( newValue, oldValue ) {
          if ( !$scope.lengthWasEnough && angular.isDefined(newValue)) {

            if ( newValue.length < $scope.buchePasswordLength ||
              scope.checkPasswordForSecurity( newValue )) {

              $scope.bucheLoginForm.passwordInput.$error.passwordWarning = true;

            } else {

              $scope.lengthWasEnough = true;
              $scope.bucheLoginForm.passwordInput.$error.passwordWarning = false;

            }
          } else if ( angular.isDefined( newValue ) ) {

            $scope.bucheLoginForm.passwordInput.$error.passwordError = newValue.length < $scope.buchePasswordLength ||
              $scope.checkPasswordForSecurity(newValue);

          }
        });
      }
    }
  })
