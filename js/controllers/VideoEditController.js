// START - USED SERVICES
/*
 *	VideoService.create
 *		PARAMS: 
 *		
 *
 *	VideoService.get
 *		PARAMS: 
 *					ObjectId id - Id 
 *		
 *
 *	VideoService.update
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * VideoService  
 */
// END - REQUIRED RESOURCES

app.controller('VideoEditController', ['$scope', '$location', '$routeParams', '$q', 'VideoService',
    function ($scope, $location, $routeParams, $q, VideoService ) {

    	//manage create and save
		$scope.external = {};
		
    	if ($routeParams.id != 'new')
    	{
        	$scope.id = $routeParams.id;
        	$scope.obj = VideoService.get({_id: $scope.id});
        	
    	}
    	else{
    		$scope.obj = new VideoService();
        	
    	}
    	
    	$scope.save = function(){
    		$scope.obj.$save().then(function(data){
    			$scope.obj=data;
        		$location.path('/videos/');
    		});
    	}
    	
    	$scope.remove = function(){
    		VideoService.remove({_id: $scope.obj._id}).$promise.then(function(){
				$('#removeModal').modal('hide');
				$('.modal-backdrop').remove();
				$('.modal-open').removeClass("modal-open");
        		$location.path('/videos/');
    		});
    	}
    	
}]);