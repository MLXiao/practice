define(['app'], function(app) {
  app.factory('utilService', ['$timeout', function($timeout){
    return {
      greeting: function() {
        console.log('hello');
      }
    };
  }])
})