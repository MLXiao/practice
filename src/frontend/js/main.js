require.config({
	baseUrl: '/js',
	urlArgs: "bust=" + (new Date()).getTime(), //Disabled cache, for debug
	paths: {
		'jquery': '../lib/jquery/dist/jquery.min',
		'bootstrap': '../lib/bootstrap/dist/js/bootstrap.min',
		'angular': '../lib/angular/angular.min',
		'angular-ui-router': '../lib/angular-ui-router/release/angular-ui-router.min',
		'angular-translate': '../lib/angular-translate/angular-translate.min',
	},
	deps: ['jquery', 'bootstrap'],
	shim: {
		'bootstrap': ['jquery'],
		'angular-ui-router': ['angular'],
		'angular-translate': ['angular'],
	},
});