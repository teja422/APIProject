<?php
	require_once './db/dbAPIProject_dbManager.php';
	
/*
 * SCHEMA DB Video
 * 
	{
		Name: {
			type: 'String'
		},
		Url: {
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
		'Url'	=> isset($body->Url)?$body->Url:'',
			);

	$obj = makeQuery("INSERT INTO video (_id, Name, Url )  VALUES ( null, :Name, :Url   )", $params, false);

	
	echo json_encode($body);
	
});
	
//CRUD - REMOVE

$app->delete('/videos/:id',	function ($id) use ($app){
	
	$params = array (
		'id'	=> $id,
	);

	makeQuery("DELETE FROM video WHERE _id = :id LIMIT 1", $params);

});
	
//CRUD - GET ONE
	
$app->get('/videos/:id',	function ($id) use ($app){
	$params = array (
		'id'	=> $id,
	);
	
	$obj = makeQuery("SELECT * FROM video WHERE _id = :id LIMIT 1", $params, false);
	
	
	
	echo json_encode($obj);
	
});
	
	
//CRUD - GET LIST

$app->get('/videos',	function () use ($app){
	makeQuery("SELECT * FROM video");
});


//CRUD - EDIT

$app->post('/videos/:id',	function ($id) use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'id'	=> $id,
		'Name'	    => isset($body->Name)?$body->Name:'',
		'Url'	    => isset($body->Url)?$body->Url:''	);

	$obj = makeQuery("UPDATE video SET  Name = :Name,  Url = :Url   WHERE _id = :id LIMIT 1", $params, false);

	
	echo json_encode($body);
    	
});


/*
 * CUSTOM SERVICES
 *
 *	These services will be overwritten and implemented in  Custom.js
 */

			
?>