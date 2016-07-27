var socket=io();

socket.on('connection',function(){
	console.log('User Connect via socket.io');
});