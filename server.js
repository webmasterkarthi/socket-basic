var PORT=process.env.PORT || 3000;
var express=require('express');
var app=express();
var http=require('http').Server(app);//start new server use express app
var io=require('socket.io')(http);

app.use(express.static(__dirname+'/public'));

io.on('connection',function(socket){
	console.log('User Connect via socket.io!');

	socket.on('message',function(message){
		console.log('Message Received: '+message.text);
		socket.broadcast.emit('message',message);
	});

	//..event name and data
	socket.emit('message',{
		text:'Welcome to the Chat application'
	});
});

http.listen(PORT,function(){
	console.log('Server Started');
});

