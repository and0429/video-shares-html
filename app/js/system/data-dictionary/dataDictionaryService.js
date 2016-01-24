'use strict';

System.service('DataDictionaryService', ['$http','Utils', function($http, Utils){

	var url = {
		list: 'service/system/datadictionary/values/2',
		allType:  'service/system/datadictionary/allType'
	};

	function Service(){

	}

	/**
	 * 列表
	 */	
	Service.prototype.list = function(param) {
		return Utils.httpCallBack($http.get(url.list));
	};

	/**
	 * 获取所有
	 */	
	Service.prototype.getAllType = function(){
		return Utils.httpCallBack($http.get(url.allType));
	};


	return new Service();


}]);