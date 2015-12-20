'use strict';

ShareApp.config(['$stateProvider', '$urlRouterProvider', 
	function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/index');	


		$stateProvider
    .state(
      'index', {
        url: '/index',
        templateUrl: 'tpls/index.html'
      }
    )
		.state(
			'state1', {
     		url: "/state1",
      	templateUrl: "tpls/123.html"
    		}
    )
    .state(
			'state2', {
     		url: "/state2",
      	templateUrl: "tpls/456.html"
    		}
    )



}]);