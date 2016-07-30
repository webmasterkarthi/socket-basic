function validate_loginForm()
{
	var $form= jQuery('#login-form');

	event.preventDefault();		
	var user=$form.find('input[name=name]');
	var room=$form.find('input[name=room]');

	if(user.val() === '')
	{
		user.focus();
		user.addClass(".red");
	}
	else if(room.val() === '')
	{
		room.focus();
		user.addClass(".red");
	}
	else
	{
		// var win = window.open('/chat.html', 'name', 'width=500,location=no,menubar=no,height=700,scrollbars=no,resizable=no,fullscreen=no');
  		// win.addEventListener("resize", function(){  
		// win.resizeTo(500,800);
  		// });		
		$form.submit();
	}	
}