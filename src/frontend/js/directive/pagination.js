define(['app'], function(app) {
	app.directive('mtPagination', ['$timeout', function($timeout){
		return {
			// scope: {}, // {} = isolate, true = child, false/undefined = no change
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			// templateUrl: '/js/directive/temp/pagination.html',
      templateUrl: function(tElement, tAttrs) {
        // console.log(tElement);
        // console.log(tAttrs);
        return '/js/directive/temp/pagination.html'
      },
			replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, iElm, iAttrs, controller) {

			}
		};
	}]);
})