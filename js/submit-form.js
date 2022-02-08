if($('#download-form').length){
    $('#requestDemo-form').validate({
        rules: {
            username: {
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

function validateContactForm1(){
    let array=[];
    var name = $('#name').val();
    var companyName = $('#companyName').val();
    var email = $('#email').val();
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
        array.push("Company Name required")

      }
      return array;
} 
$('#download-form').click(function(event) {
    //var name;
    event.preventDefault();
    let error = validateContactForm1()
    console.log("123", error);
    
    if(error.length == 0){
        var formData = {
            name:$("#name").val(),
            email:$("#email").val(),
            companyName:$("#companyName").val(),
        } 
        formData['filename'] = filename,
        formData['title'] = title,

        $('#subloader').removeClass('hideloader');
        $('#subloader').addClass('displayloader');
        $('#subloader').fadeIn();
        $.ajax({
            type:'post',
            url:'https://appserver.iosense.io/api/faclon/downloadBrochure',
            data:JSON.stringify( formData ) ,
            catch: false,
            contentType: "application/json",
            success: function(){
        //alert("submitted");
                $('#download-form')[0].reset()
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
});