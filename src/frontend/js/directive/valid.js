define(['app'], function(app) {
  app.directive('mtValid', [function(){
   return {
      require: 'ngModel',
      restrict: 'A',
      link: function($scope, elem, attr, ngModel) {
        ngModel.$parsers.unshift(function(value) {
          if (!ngModel) return;

          console.log('parsers');
          return value
        });
        ngModel.$formatters.unshift(function(value) {
          if (!ngModel) return;

          console.log('formatters');
          return value
        });
      }
    };
  }]);
})