$(".other-position").hide();
$('.burger').click(function() {
    $(this).toggleClass('active');
 });
 $('.burger').click(function() {
    $('.burger-nav').toggleClass('active-nav');
 });

 $(function () {
    $("#position").change(function() {
      var val = $(this).val();
      if(val === "other") {
          $(".other-position").show();
          $('#other-position').prop("required", true);
      }else{
        $(".other-position").hide();
      }
    });
  });
  $(function () {
    $("#region").focus(function() {
        $('.arrow').addClass('active-arrow');
    });
    $("#region").change(function() {
        $('.arrow').removeClass('active-arrow');
        $(".select").removeClass('active-label');
        $(".regionform").removeClass('active-select');
        $("#correct-region").css({"display":"none"});
    });
    $("#region").blur(function() {
        $('.arrow').removeClass('active-arrow');
    });
  });
  $(function () {
    $("#position").focus(function() {
        $('.arrow2').addClass('active-arrow');
    });
    $("#position").change(function() {
        $('.arrow2').removeClass('active-arrow');
        $("#correct-position").css({"display":"none"});
            $(".positionv").removeClass('active-label');
            $("#position").removeClass('active-select');
    });
    $("#email").change(function() {
        $("#correct-email").css({"display":"none"});
            $(".email").removeClass('active-label');
            $("#email").removeClass('active-select');
    });
    $("#name").change(function() {
        $("#correct-name").css({"display":"none"});
            $(".name").removeClass('active-label');
            $("#name").removeClass('active-select');
    });
    $("#surname").change(function() {
        $("#correct-surname").css({"display":"none"});
            $(".surname").removeClass('active-label');
            $("#surname").removeClass('active-select');
    });
    $("#position").blur(function() {
        $('.arrow2').removeClass('active-arrow');
    });
  });
  $(function() {
    $("#submit").click(function() {
        if($("#chosen").is(":selected")) {
            $("#correct-region").css({"display":"block"});
            $(".select").addClass('active-label');
            $(".regionform").addClass('active-select');
            $('html, body').animate({
                scrollTop: $("#scrollable").offset().top
            }, 500);
        }else if($("#chosen2").is(":selected")){
            $("#correct-position").css({"display":"block"});
            $(".positionv").addClass('active-label');
            $("#position").addClass('active-select');
            $('html, body').animate({
                scrollTop: $("#scrollable").offset().top
            }, 500);
        }else if(!$("#email").val()){
            $("#correct-email").css({"display":"block"});
            $(".email").addClass('active-label');
            $("#email").addClass('active-select');
            $('html, body').animate({
                scrollTop: $("#position").offset().top
            }, 500);
        }
        else if(!$("#name").val()){
            $("#correct-name").css({"display":"block"});
            $(".name").addClass('active-label');
            $("#name").addClass('active-select');
            $('html, body').animate({
                scrollTop: $("#email").offset().top
            }, 500);
        }
        else if(!$("#surname").val()){
            $("#correct-surname").css({"display":"block"});
            $(".surname").addClass('active-label');
            $("#surname").addClass('active-select');
            $('html, body').animate({
                scrollTop: $("#email").offset().top
            }, 500);
        }
        else {
            $("#correct-region").css({"display":"none"});
        }
    });
});
  function verifyPassword() {  
    var pw = document.getElementById("pswd").value;  
    //check empty password field  
    if(pw == "") {  
       document.getElementById("message").innerHTML = "გთხოვთ ჩაწეროთ პაროლი";  
       return false;  
    }  
     
   //minimum password length validation  
    if(pw.length < 8) {  
       document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";  
       return false;  
    }  
    
  //maximum length of password validation  
    if(pw.length > 15) {  
       document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";  
       return false;  
    } else {  
       alert("Password is correct");  
    }  
  } 
  $("#submit").submit(function(e) {
});
  $(function() {
    $('#submit').on("submit", function() {
      if (verifyPassword() == false) {
        verifyPassword();
        return false;
      } else {
        alert("Your code is saved");
        return true;
      }
      preventDefault();
    });
  });