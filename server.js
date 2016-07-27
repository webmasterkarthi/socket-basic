var PORT=process.env.PORT || 3000;
var express=require('express');
var app=express();
var http=require('http').Server(app);//start new server use express app

app.use(express.static(__dirname+'/public'));
http.listen(PORT,function(){
	console.log('Server Started');
});