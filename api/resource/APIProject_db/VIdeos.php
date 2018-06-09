<?php
	require_once './db/dbAPIProject_dbManager.php';
	
/*
 * SCHEMA DB VIdeos
 * 
	{
		Name: {
			type: 'String'
		},
		URL: {
			type: 'String'
		},
		//RELAZIONI
		
		
		//RELAZIONI ESTERNE
		
		
	}
 * 
 */


//CRUD METHODS


//CRUD - CREATE


$app->post('/videos',	function () use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'Name'	=> isset($body->Name)?$body->Name:'',
		'URL'	=> isset($body->URL)?$body->URL:'',
			);

	$obj = makeQuery("INSERT INTO videos (_id, Name, URL )  VALUES ( null, :Name, :URL   )", $params, false);

	
	echo json_encode($body);
	
});
	
//CRUD - REMOVE

$app->delete('/videos/:id',	function ($id) use ($app){
	
	$params = array (
		'id'	=> $id,
	);

	makeQuery("DELETE FROM videos WHERE _id = :id LIMIT 1", $params);

});
	
//CRUD - GET ONE
	
$app->get('/videos/:id',	function ($id) use ($app){
	$params = array (
		'id'	=> $id,
	);
	
	$obj = makeQuery("SELECT * FROM videos WHERE _id = :id LIMIT 1", $params, false);
	
	
	
	echo json_encode($obj);
	
});
	
	
//CRUD - GET LIST

$app->get('/videos',	function () use ($app){
	makeQuery("SELECT * FROM videos");
});


//CRUD - EDIT

$app->post('/videos/:id',	function ($id) use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'id'	=> $id,
		'Name'	    => isset($body->Name)?$body->Name:'',
		'URL'	    => isset($body->URL)?$body->URL:''	);

	$obj = makeQuery("UPDATE videos SET  Name = :Name,  URL = :URL   WHERE _id = :id LIMIT 1", $params, false);

	
	echo json_encode($body);
    	
});


/*
 * CUSTOM SERVICES
 *
 *	These services will be overwritten and implemented in  Custom.js
 */

			
?>