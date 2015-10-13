define(['app'], function(app) {
	app.factory('httpService', ['$http', '$timeout', function($http, $timeout){
    return {
      get: function(url, params) {
        return $http({
          method: 'GET',
          url: url,
          params: params
        });
      },
      post: function(url, param, contentType) {
        if (!contentType) contentType = 'application/json';
        return $http({
          method: 'POST',
          url: url,
          headers: {
            'Content-Type': contentType,
          },
          data: param
        });
      }
    };
  }])
})