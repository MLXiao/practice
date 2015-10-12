define(['app'], function(app) {

  app.controller('homepageController', ['$scope', '$filter', 'utilService', 'httpService', function($scope, $filter, utilService, httpService){

    $scope.now = (new Date()).getTime();
    $scope.dataFormat = 'yyyy-MM-dd HH:mm:ss';

    console.log($.param({a: 1, b: 2}));

    httpService.get('/api/test/get', {a: 1, b: 2})
    	.success(function(data) {
    		console.log(data)
    	})
  }]);
});