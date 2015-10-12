define(['app'], function(app) {
	app.factory('httpService', ['$http', '$timeout', function($http, $timeout){
    return {
      get: function(url, param) {
        if (param) {
          var param = $.param(param);
          if (param) url += '?' + param;
        }
        return $http.get(url);
      },
      post: function(url, param, contentType) {
        return;
      }
    };
  }])
})