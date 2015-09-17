define('app', [], function () {
    var app = angular.module('app', ['ui.router']);
    return app;
});
define('controller/homepageCtrl', ['app'], function (app) {
    return app.controller('homepageCtrl', [
        '$scope',
        function ($scope) {
            $scope.test = 'haha';
        }
    ]);
});
define('controller/controllers', ['controller/homepageCtrl'], function () {
});
define('router', [
    'app',
    'controller/controllers'
], function (app) {
    app.config([
        '$locationProvider',
        '$stateProvider',
        function ($locationProvider, $stateProvider) {
            ;
            $locationProvider.html5Mode(true);
            $stateProvider.state('home', {
                url: '/home',
                templateUrl: 'template/homepage.html',
                controller: 'homepageCtrl'
            });
        }
    ]);
});
define('bootstrap', ['router'], function () {
    angular.bootstrap(document, ['app']);
});