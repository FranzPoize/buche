'use strict';

angular.module('buche',['ngMessages']);

'use strict';

angular.module( 'buche' )
  .controller( 'BucheLoginCtrl', ["$scope", function ( $scope ) {
  }]);

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
          8;

        $scope.forgotUsernameText = attrs.bucheForgotUsernameLn ?
          attrs.bucheForgotUsernameLn :
          "Forgotten your username ?";

        $scope.forgotUsernameLink = attrs.forgotUsernameLink;

        $scope.forgotPasswordText = attrs.bucheForgotPasswordText ?
          attrs.bucheForgotPasswordText :
          "Forgotten your password ?";

        $scope.forgotPasswordLink = attrs.forgotPasswordLink;

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

'use strict';

angular.module( 'buche' )
  .controller( 'BucheRegisterCtrl', ["$scope", function ( $scope ) {

  }])

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

angular.module("buche").run(["$templateCache", function($templateCache) {$templateCache.put("app/main/main.html","<div class=\"container\"><div class=\"row\"><div class=\"col-md-6\"><div class=\"well\"><div buche-login=\"\" buche-login-cb=\"login\" buche-password-length=\"8\" buche-login-no-tooltip=\"true\" forgot-username-link=\"http://google.com/\" forgot-password-link=\"http://yahoo.fr/\"></div></div></div><div class=\"col-md-6\"><div class=\"well\"><div buche-register=\"\" buche-register-cb=\"register()\"></div></div></div></div></div>");
$templateCache.put("components/login/login.html","<div><h2>Login</h2><form class=\"form\" name=\"bucheLoginForm\" id=\"buche-login-form\"><div class=\"form-group\" ng-class=\"{\'has-error\':bucheLoginForm.loginInput.$error.doesntExist}\"><input name=\"loginInput\" id=\"loginInput\" type=\"text\" class=\"form-control\" placeholder=\"username\" ng-model=\"bucheUsername\" required=\"\" data-toggle=\"tooltip\" data-placement=\"{{bucheLoginTooltipPlacement}}\" title=\"{{bucheLoginTooltipText}}\"> <a href=\"{{forgotUsernameLink}}\">{{forgotUsernameText}}</a></div><div class=\"form-group\" ng-class=\"{\'has-error\':bucheLoginForm.passwordInput.$error.passwordError,\'has-warning\':bucheLoginForm.passwordInput.$error.passwordWarning}\"><input name=\"passwordInput\" id=\"passwordInput\" type=\"password\" class=\"form-control\" placeholder=\"Password\" ng-model=\"buchePassword\" required=\"\" data-toggle=\"tooltip\" data-placement=\"{{buchePasswordTooltipPlacement}}\" title=\"{{buchePasswordTooltipText}}\"> <a href=\"{{forgotPasswordLink}}\">{{forgotPasswordText}}</a></div><div ng-messages=\"bucheLoginForm.result.$error\"><div ng-message=\"credentials\">Le mot de passe ne correspond pas a l\'identifiant</div></div><button class=\"btn btn-primary\" ng-click=\"bucheLogin()\" ng-disabled=\"bucheLoginForm.$invalid\">Login</button></form></div>");
$templateCache.put("components/register/register.html","<div><h2>Register</h2><form class=\"form\" name=\"bucheRegisterForm\"><div class=\"form-group\"><input name=\"login\" type=\"text\" class=\"form-control\" placeholder=\"username\" ng-model=\"username\" required=\"\"></div><div class=\"form-group\"><input type=\"text\" class=\"form-control\" placeholder=\"Email address\" ng-model=\"email\" required=\"\"></div><div class=\"form-group\"><input type=\"password\" class=\"form-control\" placeholder=\"Password\" ng-model=\"password\" required=\"\"></div><div class=\"form-group\"><input type=\"password\" class=\"form-control\" placeholder=\"Password confirmation\" ng-model=\"passwordConfirm\" required=\"\"></div><div ng-messages=\"bucheRegisterForm.result.$error\"><div ng-message=\"credentials\">Le mot de passe ne correspond pas a l\'identifiant</div></div><button class=\"btn btn-primary\" ng-click=\"bucheRegisterCb()\" ng-disabled=\"bucheRegisterForm.$invalid\">Register</button></form></div>");}]);