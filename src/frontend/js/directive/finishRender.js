define(['app'], function(app) {
  app.directive('mtFinishRender', ['$timeout', function($timeout){
    return {
      restrict: 'A',
      link: function($scope, iElm, iAttrs, controller) {
        // console.log($scope.$last);
      }
    };
  }]);
})