// START - USED SERVICES
/*
 *	VIdeosService.create
 *		PARAMS: 
 *		
 *
 *	VIdeosService.get
 *		PARAMS: 
 *		
 *
 *	VIdeosService.update
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * VIdeosService  
 */
// END - REQUIRED RESOURCES

app.controller('VIdeosEditController', ['$scope', '$location', '$routeParams', '$q', 'VIdeosService',
    function ($scope, $location, $routeParams, $q, VIdeosService ) {

    	//manage create and save
		$scope.external = {};
		
    	if ($routeParams.id != 'new')
    	{
        	$scope.id = $routeParams.id;
        	$scope.obj = VIdeosService.get({_id: $scope.id});
        	
    	}
    	else{
    		$scope.obj = new VIdeosService();
        	
    	}
    	
    	$scope.save = function(){
    		$scope.obj.$save().then(function(data){
    			$scope.obj=data;
        		$location.path('/videoses/');
    		});
    	}
    	
    	$scope.remove = function(){
    		VIdeosService.remove({_id: $scope.obj._id}).$promise.then(function(){
				$('#removeModal').modal('hide');
				$('.modal-backdrop').remove();
				$('.modal-open').removeClass("modal-open");
        		$location.path('/videoses/');
    		});
    	}
    	
}]);