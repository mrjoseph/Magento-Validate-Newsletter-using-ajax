huntergather.newsletter = huntergather.newsletter || {};

huntergather.newsletter = {
	init:function(){
		//ajax back the responce from the newsletter sign-up
		(function(){
			var 
			newsletterForm		= $j('#newsletter-validate-detail'),
			scripturl 			= newsletterForm.attr('action'),
			messageContainer 	= $j('#newsletter-signup-success-msg'),
			newsletterInput		= $j('#newsletter');
			
			newsletterForm.submit(function(e){
				var IsEmail = function(email){
					var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
					return regex.test(email);
				};
				
				var emailaddress = newsletterInput.val();

				if(!IsEmail(emailaddress)){	
					return false;
				}

		 		e.preventDefault();
			   $j.ajax({
		   			type: "POST",
	    	   		url: scripturl,
	       			data: newsletterForm.serialize(),
	       			success: function(html){
	       				messageContainer.fadeIn();
	       				// var message = $j(html).find('.messages li ul li span');
	       					var message = $j('<span>Thank you, you have been successfully registered</span>');
	       				messageContainer.append(message);
	       				newsletterInput.attr('value','');
	       				setTimeout(function(){
	       					messageContainer.fadeOut(function(){
	       						messageContainer.empty();
	       					});
	       				},5000);
	       			}
	   			});
			});
		})();
		
		//Show and hide the disclaimer in the footer		
		$j('#privacy-policy-msg').hide();
		$j('.validate-email').click(function(){
			$j('#privacy-policy-msg').stop().fadeIn();
		});
		$j('.validate-email').blur(function(){
			$j('#privacy-policy-msg').stop().fadeOut();
		});
	}
};