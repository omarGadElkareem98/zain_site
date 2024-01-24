var translator;
var app = angular.module('app', ['pascalprecht.translate'])
    .config(['$translateProvider', function ($translateProvider) {
        $translateProvider
            .useStaticFilesLoader({
                prefix: '/ng/ng-Languages/',
                suffix: '.json'
            })
            // remove the warning from console log by putting the sanitize strategy
            .useSanitizeValueStrategy('sanitizeParameters')
            .preferredLanguage('ar');
    }])
    .controller('ctrl', ['$scope', '$translate', '$rootScope', function ($scope, $translate, $rootScope) {
        $scope.changeLanguage = function (key) {
            $rootScope.lang = key;
            $translate.use(key);
        };
        translator = $translate;
        //$rootScope.lang = 'en';
    }]).run(['$rootScope', function ($rootScope) {
        $rootScope.lang = 'ar';
    }]);

var app_admin = angular.module('app_admin', ['pascalprecht.translate'])
    .config(['$translateProvider', function ($translateProvider) {
        $translateProvider
            .useStaticFilesLoader({
                prefix: '/ng/ng-Languages-admin/',
                suffix: '.json'
            })
            // remove the warning from console log by putting the sanitize strategy
            .useSanitizeValueStrategy('sanitizeParameters')
            .preferredLanguage('ar');
    }])
    .controller('ctrl_admin', ['$scope', '$translate', '$rootScope', function ($scope, $translate, $rootScope) {
        $scope.changeLanguage = function (key) {
            $rootScope.lang = key;
            $translate.use(key);
        };
        //$rootScope.lang = 'en';
    }]).run(['$rootScope', function ($rootScope) {
        $rootScope.lang = 'ar';
    }]);