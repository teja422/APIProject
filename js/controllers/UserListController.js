// START - USED SERVICES
/*
 *	UserService.changePassword
 *		PARAMS: 
 *		RETURN: object
 *				
 *
 *	UserService.create
 *		PARAMS: 
 *		
 *
 *	UserService.delete
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	UserService.get
 *		PARAMS: 
 *					ObjectId id - Id 
 *		
 *
 *	UserService.list
 *		PARAMS: 
 *		
 *
 *	UserService.update
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * UserService  
 */
// END - REQUIRED RESOURCES


//CRUD LIST FOR [object Object]

app.controller('UserListController', ['$scope', 'UserService',
    function ($scope, UserService ) {
		
    	$scope.list = UserService.query();
    	
}]);