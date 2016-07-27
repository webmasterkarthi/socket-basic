var socket=io();

socket.on('connect',function(){
	console.log('User Connect via socket.io server');
});

socket.on('message',function(message){
	console.log('New msg!!');
	console.log(message.text);
}); 

//Handles submitting of new message
var $form= jQuery('#message-form');


$form.on('submit',function(event){
	event.preventDefault();
	var msg=$form.find('input[name=message]');
	socket.emit('message',{
		text:msg.val()
	});

	msg.val('');
});
