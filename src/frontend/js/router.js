define(['app', 'service/services', 'directive/directives', 'controller/controllers'], function(app) {
  app.config(['$locationProvider', '$stateProvider', '$httpProvider',
    function($locationProvider, $stateProvider, $httpProvider) {

      $httpProvider.interceptors.push(function($q) {
        return {
          'request': function(config) {
            // console.log(config);
            // 成功的请求方法
            return config; // 或者 $q.when(config);
          },
          'response': function(response) {
            // console.log(response);
            // 响应成功
            return response; // 或者 $q.when(config);
          },
          'requestError': function(rejection) {
            // console.log(rejection);
            // 请求发生了错误,如果能从错误中恢复,可以返回一个新的请求或promise
            // return response; // 或新的promise
            // 或者,可以通过返回一个rejection来阻止下一步
            return $q.reject(rejection);
          },
          'responseError': function(rejection) {
            // console.log(rejection);
            // 请求发生了错误,如果能从错误中恢复,可以返回一个新的响应或promise
            // return rejection; // 或新的promise
            // 或者,可以通过返回一个rejection来阻止下一步
            return $q.reject(rejection);
          }
        };
      });

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