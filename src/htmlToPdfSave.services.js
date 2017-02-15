angular.module('htmlToPdfSave') 
.service('pdfSaveService' , ['$rootScope', function($rootScope) {

	var _config = {};

	this.createPdf = function(){
		$rootScope.$broadcast('savePdfEvent', _config);
	};

	this.setConfigure = function(config){
		_config = config;
	}

	this.getConfigure = function(key){
		return _config[key];
	};

}]);

