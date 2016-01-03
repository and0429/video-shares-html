'use strict';

System.service('DataDictionaryService', ['$http','Utils', function($http, Utils){

	var url = {
		list: 'service/system/datadictionary/values/2'
	}

	function Service(){

	}

	/**
	 * 列表
	 */	
	Service.prototype.list = function(param) {
		return Utils.httpCallBack($http.get(url.list));
	};


	return new Service();


}]);