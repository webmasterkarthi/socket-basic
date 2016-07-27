var name=getQueryVariable('name')|| 'Anonymous';
var room=getQueryVariable('room');

console.log(name+' wants to join '+room);

var socket=io();
jQuery('.room-title').text(room);

socket.on('connect',function(){
	console.log('User Connect via socket.io server');
	socket.emit('joinRoom',{
		name:name,
		room:room
	});
});

socket.on('message',function(message){
	
	var momentTimestamp=moment.utc(message.timestamp);
	var $message=jQuery('.messages');

	console.log('New msg!!');
	console.log(message.text);

	$message.append('<p><strong>'+message.name+' '+ momentTimestamp.local().format('h:mm a')+'<strong></p>')
	//jQuery('.messages').append('<p><strong>'+momentTimestamp.local().format('h:mm a')+': </strong>'+message.text+'</p>');
	$message.append('<p>'+message.text+'</p>');
}); 

//Handles submitting of new message
var $form= jQuery('#message-form');


$form.on('submit',function(event){
	event.preventDefault();
	var msg=$form.find('input[name=message]');
	socket.emit('message',{
		name:name,
		text:msg.val()
	});

	msg.val('');
});
