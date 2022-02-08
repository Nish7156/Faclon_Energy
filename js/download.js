var filename, title;
const nish = document.querySelector(".name");
	var show = true;

function downloadModal(event, value1, value2) {
	$("body").addClass('auto-scrolling');

	console.log("event", event,value1,value2);
	filename = value1;
	title = value2;
	console.log("filename", filename, title);
	event.stopPropagation();
	$('body').removeClass('mobile-menu-visible');
	$('#exampleModal').modal('show'); 
	console.log("downloadModal", event);
	console.log9('exampleModal', event);


}
function remove_auto_scrolling() {
	$('body').removeClass('auto-scrolling');
}
function openModalImg(imgObj){
	console.log(8888, imgObj)
	var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
  modal.style.display = "block";
  modalImg.src = imgObj.src;
  captionText.innerHTML = imgObj.alt;

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
}
(function($) {
	

	"use strict";
	
	jQuery.validator.addMethod("emailExt", function(value, element, param) {
		return value.match(/^[a-zA-Z0-9_\.%\+\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,}$/);
	},'Your E-mail is wrong');


	//Sales Form Validation
	if($('#sales-form').length){
		$('#sales-form').validate({
			rules: {
				name: {
					required: true
				},
				email: {
					required: true,
					email: true,
					emailExt: true
				},
				companyName: {
					required: true
				},
				
				
			}
		});
	}

	function validateSalesForm(){
		let array=[];
		var name = $('#name').val();
		
		var email = $('#email').val();
		var companyName = $('#companyName').val();
		var indexat = email.indexOf("@"); //Index of "@" in the email field
		var indexdot = email.indexOf("."); //Index of "." in the email field
		

	
		  if(name == '')
		  {
			$('#name').focus(); 
			array.push("Name required")
		  }
		  else if(indexat < 1 || (indexdot-indexat) < 2)
		  {
			$('#email').focus();
			array.push("Email required")
	
		  }
		 
		  else if(companyName == '')
		  {
			$('#companyName').focus();
			array.push("companyName required")
	
		  }
		  
		  return array;	 
	} 
	$('#submitsales-form').click(function(event) {
		//var name;
		event.preventDefault();
		let error = validateSalesForm()
		console.log("123", error);
		
		if(error.length == 0){
			var formData = {
				name:$("#name").val(),
				email:$("#email").val(),
				
				
				companyName:$("#companyName").val(),
				
				emailType:3
			} 
			$('#subloader').removeClass('hideloader');
			$('#subloader').addClass('displayloader');
			$('#subloader').fadeIn();
			$.ajax({
				type:'post',
				url:'xxxx',
				data:JSON.stringify( formData ),
				catch: false,
				contentType: "application/json",
				success: function(){
				
					$('#sales-form')[0].reset()
					$('#notice').removeClass('hide-notice');
					$('#notice').addClass('show-notice');
					$('#subloader').removeClass('displayloader');

					$('#subloader').addClass('hideloader');

					$('#subloader').fadeOut();
					setTimeout(() => {
						$('#notice').removeClass('show-notice');
						$('#notice').addClass('hide-notice');
			
					}, 3000)
				},
				error: function(jqXHR, textStatus, errorThrown) {
				$('#subloader').removeClass('displayloader');
					$('#subloader').addClass('hideloader');
	
					$('#errornotice').removeClass('hide-errornotice');
					$('#errornotice').addClass('show-errornotice');
	
					setTimeout(() => {
						$('#errornotice').removeClass('show-errornotice');
					$('#errornotice').addClass('hide-errornotice');
			
					}, 3000)
				},
			});
		}
		
	
		console.log("111", formData)
		
		//alert("welcome");
	});
	
	

	
	
	/* ==========================================================================
   When document is loaded, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
		enableMasonry();
		expertizeRoundCircle ();
		var year = new Date().getFullYear();
        document.getElementById("footer-info").innerHTML = `&copy; ${year} <a href="#" >Faclon Labs</a> . All rights reserved`
	});

	

})(window.jQuery);

function handlePreloader() {
	$('#body').toggleClass('body-hidden');

}

