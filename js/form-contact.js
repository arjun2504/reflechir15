// JavaScript Document

// contact form
$(document).ready(function() {
	$('form#form').submit(function() {
	$('form#form .error').remove();
	var hasError = false;
	
	$('.requiredField').each(function() {
	
	if(jQuery.trim($(this).val()) == '') {
    	var labelText = $(this).prev('label').text();
    	$(this).parent().append('<span class="error">This field is required</span>');
    	$(this).addClass('inputError');
    	hasError = true;
    } else if($(this).hasClass('email')) {
    	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    	if(!emailReg.test(jQuery.trim($(this).val()))) {
    		var labelText = $(this).prev('label').text();
    		$(this).parent().append('<span class="error">Invalid email address</span>');
    		$(this).addClass('inputError');
    		hasError = true;
    	}
    }
    
	});
    
	if(!hasError) {
    	$('form#form input.submit').fadeOut('normal', function() {
    		$(this).parent().append('');
    });

    var formInput = $(this).serialize();
    
	$.post($(this).attr('action'),formInput, function(data){
    
		$('form#form').slideUp("fast", function() {
    		$(this).before('<div class="success">Thank you. You have been successfully registered. We will get back to you soon!<br>Send project abstract and/or paper to <span style="font-weight: bold"><a href="mailto:reflechirece15@gmail.com">reflechirece15@gmail.com</a></span></div>');
    	});

    });
	document.getElementById('contact-form').innerHTML = "<center>Thank you. You have been successfully registered. We will get back to you soon!</center><br>Send project abstract and/or paper to <span style='font-weight: bold'><a href='mailto:reflechirece15@gmail.com'>reflechirece15@gmail.com</a></span>";
    }
    return false;
    });
});