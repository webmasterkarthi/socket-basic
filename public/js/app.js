var socket=io();

socket.on('connect',function(){
	console.log('User Connect via socket.io server');
});

socket.on('message',function(message){
	console.log('New msg!!');
	console.log(message.text);
}); 