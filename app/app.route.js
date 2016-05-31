/**
 * General app route
 */
angular
	.module('app')
	.config(config);

config.$inject = ['$routeProvider', '$locationProvider'];
function config($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/index.html',
			controller: 'ImageController'
		});

	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
}

