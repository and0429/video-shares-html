'use strict';

ShareApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/123', {
		templateUrl: 'tpls/123.html'
	}).otherwise({
		templateUrl: 'tpls/123.html'
  		/*redirectTo: '/index.html'*/
  	});
}]);