'use strict';

share.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when({

	}).
  	otherwise({
  		redirectTo: '/view1'
  	});
}]);