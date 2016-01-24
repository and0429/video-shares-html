'use strict';

ShareApp.config(['$stateProvider', '$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/datadictionry');

	$stateProvider.state('index', {
		url : '/index',
		templateUrl : 'tpls/index.html'
	}).state('state1', {
		url : "/state1",
		templateUrl : "tpls/123.html"
	}).state('state2', {
		url : "/state2",
		templateUrl : "tpls/456.html"
	}).state('datadictionry', {/*数据字典列表*/
		url : "/datadictionry",
		templateUrl : "tpls/system/data-dictionary/index.html"
	}).state('datadictionry_edit', {
		url : "/datadictionry/edit",
		templateUrl : "tpls/system/data-dictionary/edit.html"
	});

}]);
