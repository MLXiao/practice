define(['app', 'controller/controllers'], function(app) {
	app.config(['$locationProvider', '$stateProvider', function($locationProvider, $stateProvider) {;
        $locationProvider.html5Mode(true);
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'template/homepage.html',
            controller: 'homepageCtrl'
        });
    }])
})