'use strict';

angular.module('buche',['ngMessages']);

'use strict';

angular.module( 'buche' )
  .controller( 'BucheLoginCtrl', ["$scope", function ( $scope ) {
    $scope.login = function () {
      $scope.bucheLoginCb({loginForm:$scope.loginForm});
    }
  }]);

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

'use strict';

angular.module( 'buche' )
  .controller( 'BucheRegisterCtrl', ["$scope", function ( $scope ) {

  }])

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

angular.module("buche").run(["$templateCache", function($templateCache) {$templateCache.put("app/main/main.html","<div class=\"container\"><div class=\"row\"><div class=\"col-md-6\"><div class=\"well\"><div buche-login=\"\" buche-login-cb=\"login(loginForm)\"></div></div></div><div class=\"col-md-6\"><div class=\"well\"><div buche-register=\"\" buche-register-cb=\"register()\"></div></div></div></div></div>");
$templateCache.put("components/login/login.html","<div><h2>Login</h2><form class=\"form\" name=\"loginForm\"><div class=\"form-group\" ng-class=\"{\'has-error\':loginForm.loginInput.$error.doesntExist}\"><input name=\"loginInput\" type=\"text\" class=\"form-control\" placeholder=\"username\" ng-model=\"username\" required=\"\"></div><div class=\"form-group\" ng-class=\"{\'has-error\':loginForm.passwordInput.$error.doesntMatch,\'has-warning\': loginForm.passwordWarning}\"><input name=\"passwordInput\" type=\"password\" class=\"form-control\" placeholder=\"username\" ng-model=\"password\" required=\"\"></div><div ng-messages=\"loginForm.result.$error\"><div ng-message=\"credentials\">Le mot de passe ne correspond pas a l\'identifiant</div></div><button class=\"btn btn-primary\" ng-click=\"login()\" ng-disabled=\"loginForm.$invalid\">Login</button></form></div>");
$templateCache.put("components/register/register.html","<div><h2>Register</h2><form class=\"form\" name=\"loginForm\"><div class=\"form-group\"><input name=\"login\" type=\"text\" class=\"form-control\" placeholder=\"username\" ng-model=\"username\" required=\"\"></div><div class=\"form-group\"><input type=\"text\" class=\"form-control\" placeholder=\"Email address\" ng-model=\"email\" required=\"\"></div><div class=\"form-group\"><input type=\"password\" class=\"form-control\" placeholder=\"Password\" ng-model=\"password\" required=\"\"></div><div class=\"form-group\"><input type=\"password\" class=\"form-control\" placeholder=\"Password confirmation\" ng-model=\"passwordConfirm\" required=\"\"></div><div ng-messages=\"loginForm.result.$error\"><div ng-message=\"credentials\">Le mot de passe ne correspond pas a l\'identifiant</div></div><button class=\"btn btn-primary\" ng-click=\"bucheRegisterCb()\" ng-disabled=\"loginForm.$invalid\">Register</button></form></div>");}]);