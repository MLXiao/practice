define(['app'], function(app) {
	app.filter('myFilter', [
    function() {
      return function(input, arg) {
        return 'hello ' + input + arg;
      }
    }
	]);
})