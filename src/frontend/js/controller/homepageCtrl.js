define(['app'], function(app) {
    console.log(app);
    return app.controller('homepageCtrl', ['$scope', function($scope){
        $scope.test = 'haha';
    }]);
});