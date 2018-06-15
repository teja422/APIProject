// START - USED SERVICES
/*
 *	VideoService.delete
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	VideoService.list
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * VideoService  
 */
// END - REQUIRED RESOURCES


//CRUD LIST FOR [object Object]

app.controller('VideoListController', ['$scope', 'VideoService',
    function ($scope, VideoService ) {
		
    	$scope.list = VideoService.query();
    	
}]);