var name = getQueryVariable('name') || 'Anonymous';
var room = getQueryVariable('room');

console.log(name + ' wants to join ' + room);

var socket = io();
jQuery('.room-title').text(room);
jQuery('#heading').text(room);

socket.on('connect', function () {
	console.log('User Connect via socket.io server');
	socket.emit('joinRoom', {
		name : name,
		room : room
	});
});

socket.on('message', function (message) {

	var momentTimestamp = moment.utc(message.timestamp);
	var $messages = jQuery('.messages');

	console.log('New msg!!');
	console.log(message.text);

	if (name === message.name) {
		var $data = jQuery('<p style="text-align:right;"><strong>' + message.name + ' ' + momentTimestamp.local().format('h:mm a') + '<strong></p>');
		var $message = jQuery('<li class="" style="text-align: right;list-style-type:none;">' + message.text + '</li>');

		var $divData = jQuery('<div class="well myMsg" ></div>');
		$divData.append($data);
		$divData.append($message);
		$messages.append($divData);
	} else {
		var $data = jQuery('<p><strong>' + message.name + ' ' + momentTimestamp.local().format('h:mm a') + '<strong></p>');
		var $message = jQuery('<li class="" style="list-style-type:none;">' + message.text + '</li>');

		var $divData = jQuery('<div class="well frndMsg"></div>');
		$divData.append($data);
		$divData.append($message);
		$messages.append($divData);
	}

	$('#chat').animate({
		scrollTop : $('#chat')[0].scrollHeight
	}, 2000);
});

//Handles submitting of new message
var $form = jQuery('#message-form');

$form.on('submit', function (event) {
	event.preventDefault();
	var msg = $form.find('input[name=message]');
	if (msg.val() === '');
	else {
		socket.emit('message', {
			name : name,
			text : msg.val()

		});
		msg.val('');

		$('#chat').animate({
			scrollTop : $('#chat')[0].scrollHeight
		}, 2000);
	}
});
