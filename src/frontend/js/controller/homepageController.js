define(['app'], function(app) {

  app.controller('homepageController', ['$timeout', '$q', '$rootScope', '$scope', '$filter', '$http', 'utilService', 'httpService',
    function($timeout, $q, $rootScope, $scope, $filter, $http, utilService, httpService){

    $scope.now = (new Date()).getTime();
    $scope.dataFormat = 'yyyy-MM-dd HH:mm:ss';

    // $scope.$evalAsync(function($scope) {
    //   console.log($('li'));
    // })

    $scope.btn_click = function() {
      $scope.btnClk = !$scope.btnClk;
      $scope.$emit('btnClk', 'haha');
    }
    $rootScope.$on('btnClk', function(){
      // console.log($scope);
    });

    // function asyncGreet(name) {
    //   var deferred = $q.defer();

    //   setTimeout(function() {
    //     // 因为此function 在未来的事件循环中异步执行,
    //     // 我们需要把代码包装到到一个 $apply 调用中,以便正确的观察到 model 的改变
    //     $scope.$apply(function() {
    //       deferred.notify('即将问候 ' + name + '.');

    //       if (name === 'a') {
    //         deferred.resolve('你好, ' + name + '!');
    //       } else {
    //         deferred.reject('拒绝问候 ' + name + ' .');
    //       }
    //     });
    //   }, 1000);

    //   return deferred.promise;
    // }

    // var promise = asyncGreet('a');
    // promise.then(function(greeting) {
    //   console.log('成功: ' + greeting);
    // }, function(reason) {
    //   console.log('失败: ' + reason);
    // }, function(update) {
    //   console.log('收到通知: ' + update);
    // });


    // httpService.post('/api/test/get', {a: 1, b: 2})
    //   .success(function(data) {
    //     console.log(data);
    //   })

    // $http({
    //   method: 'GET',
    //   url: '/api/test/get',
    //   params: {}
    // }).success(function(data) {
    //   console.log(data);
    // });

  // $http.jsonp('http://localhost:931/test/get?callback=JSON_CALLBACK').success(function(response) {
  //   console.log('haha');
  //   console.log(response);
  // }).error(function(response) {
  //    console.log('haha');
  //   console.log(response);
  // });

  // $http({method: 'JSONP', url: 'http://localhost:931/test/get?callback=JSON_CALLBACK'}).
  //   then(function() {
  //     console.log(arguments);
  //   }, function() {
  //     console.log(arguments);
  //   });

  }]);
});