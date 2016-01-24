'user strict';
ShareApp.service('Utils', [function(){

	function Service(){}

	Service.prototype.httpCallBack = function(promise){
		if (promise) {
			return promise.then(
					function(res){
						return res.data;
					},

					function(res){
						console.log(res);
						window.alert(res.status);
					}
			);
		}
		return null;
	};

	return new Service();
}]);
