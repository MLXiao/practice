define(['app', 'service/services', 'filter/filters', 'directive/directives', 'controller/controllers'], function(app) {
    app.config(['$locationProvider', '$stateProvider',
        function($locationProvider, $stateProvider) {
            $locationProvider.html5Mode(true);
            $stateProvider.state('home', {
                url: '/home',
                templateUrl: 'template/homepage.html',
                controller: 'homepageController',
            }).state('login', {
                url: '/login',
                templateUrl: 'template/login.html',
                controller: 'loginController',
            });
        }
    ]).run([
        function() {
            // $state.go('login');
            // console.log('haha');
        }
    ]);
})