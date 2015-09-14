define(['angular-ui-router'], function() {
    var app = angular.module('app', ['ui.router', '']);
    app.config(['$locationProvider', '$stateProvider', function($locationProvider, $stateProvider) {;
        $locationProvider.html5Mode(true);
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'template/homepage.html',
            controller: 'homepageCtrl'
        });

    }])
    // app.controller('homepageCtrl', ['$scope', function($scope){
    //     $scope.test = 'haha';
    // }]);
    return app;
});