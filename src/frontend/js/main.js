require.config({
	baseUrl: './js',
	urlArgs: "bust=" + (new Date()).getTime(), //Disabled cache, for debug
	paths: {
		'jquery': '../lib/jquery/dist/jquery.min',
		'bootstrap-js': '../lib/bootstrap/dist/js/bootstrap.min',
		'bootstrap': 'bootstrap',
		'app': 'app',
		'angular': '../lib/angular/angular.min',
		'angular-ui-router': '../lib/angular-ui-router/release/angular-ui-router.min',
		'angular-translate': '../lib/angular-translate/angular-translate.min',
	},
	deps: ['jquery', 'angular', 'bootstrap'],
	shim: {
		'bootstrap-js': {
			deps: ['jquery'],
			exports: 'bootstrap-js',
		},
		'angular': {
			deps: ['jquery'],
			exports: 'angular',
		},
		'angular-ui-router': {
			deps: ['angular'],
			exports: 'angular-ui-router',
		},
		'angular-translate': {
			deps: ['angular'],
			exports: 'angular-translate',
		},
	},
});