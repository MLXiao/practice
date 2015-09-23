define(['app'], function(app) {
  app.controller('homepageController', ['$scope', '$filter', function($scope, $filter){

    $scope.now = (new Date()).getTime();
    $scope.dataFormat = 'yyyy-MM-dd HH:mm:ss';
    console.log($scope.now);
    // console.log($filter('date')($scope.now))

  }]);
});