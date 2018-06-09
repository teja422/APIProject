// START - USED SERVICES
/*
 *	VIdeosService.delete
 *		PARAMS: 
 *		
 *
 *	VIdeosService.list
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


//CRUD LIST FOR [object Object]

app.controller('VIdeosListController', ['$scope', 'VIdeosService',
    function ($scope, VIdeosService ) {
		
    	$scope.list = VIdeosService.query();
    	
}]);