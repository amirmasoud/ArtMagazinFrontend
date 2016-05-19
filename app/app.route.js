/**
 * General app route
 */
angular
	.module('app')
	.config(config);

function config($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/index.html'
		})
		.when('/about', {
			templateUrl: 'partials/about.html'
		});
}

