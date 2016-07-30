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
	
		$form.submit();
	}	
}