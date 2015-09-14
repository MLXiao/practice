define(['angular-ui-router'], function() {
    var app = angular.module('app', ['ui.router']);
    app.config(['$stateProvider', function($stateProvider) {

        $stateProvider.state('test', {
            url: '/test',
            templateUrl: 'template/test.html'
        });

    }])
    return app;
});