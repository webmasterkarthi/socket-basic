var socket=io();

socket.on('connect',function(){
	console.log('User Connect via socket.io server');
});

socket.on('message',function(message){
	
	var momentTimestamp=moment.utc(message.timestamp);
	console.log('New msg!!');
	console.log(message.text);

	jQuery('.messages').append('<p><strong>'+momentTimestamp.local().format('h:mm a')+': </strong>'+message.text+'</p>');
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
