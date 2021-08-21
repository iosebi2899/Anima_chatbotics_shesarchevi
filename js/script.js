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
        $("#fill-input").css({"display":"none"});
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
            $("#fill-input").css({"display":"none"});
    });
    $("#email").change(function() {
        $("#correct-email").css({"display":"none"});
            $(".email").removeClass('active-label');
            $("#email").removeClass('active-select');
            $("#fill-input").css({"display":"none"});
    });
    $("#name").change(function() {
        $("#correct-name").css({"display":"none"});
            $(".name").removeClass('active-label');
            $("#name").removeClass('active-select');
            $("#fill-input").css({"display":"none"});
    });
    $("#surname").change(function() {
        $("#correct-surname").css({"display":"none"});
            $(".surname").removeClass('active-label');
            $("#surname").removeClass('active-select');
            $("#fill-input").css({"display":"none"});
    });
    $("#pwd1").change(function() {
        $("#correct-pwd1").css({"display":"none"});
            $(".pwd1").removeClass('active-label');
            $("#pwd1").removeClass('active-select');
            $("#fill-input").css({"display":"none"});
    });
    $("#pwd2").change(function() {
        $("#correct-pwd2").css({"display":"none"});
            $(".pwd2").removeClass('active-label');
            $("#pwd2").removeClass('active-select');
            $("#fill-input").css({"display":"none"});
    });
    $("#position").blur(function() {
        $('.arrow2').removeClass('active-arrow');
    });
  });
 function changetext(){
     var name = document.getElementById("name").value;
     var surname = document.getElementById("surname").value;
     var region = document.getElementById("region").value;
     var position = document.getElementById("position").value;
     if(position=="other"){
         position = document.getElementById("other-position").value;
     }else{
         position = position;
     }
     var email = document.getElementById("email").value;
    document.getElementById("name.prop").innerHTML = name;
    document.getElementById("surname.prop").innerHTML = surname;
    document.getElementById("region.prop").innerHTML = region;
    document.getElementById("position.prop").innerHTML = position;
    document.getElementById("email.prop").innerHTML = email;
 }
  $(function() {
    $("#submit").click(function() {
        if($("#chosen").is(":selected")) {
            $("#correct-region").css({"display":"block"});
            $(".select").addClass('active-label');
            $(".regionform").addClass('active-select');
            $("#fill-input").css({"display":"block"});
            $('html, body').animate({
                scrollTop: $("#scrollable").offset().top
            }, 500);
        }else if($("#chosen2").is(":selected")){
            $("#correct-position").css({"display":"block"});
            $(".positionv").addClass('active-label');
            $("#position").addClass('active-select');
            $("#fill-input").css({"display":"block"});
            $('html, body').animate({
                scrollTop: $("#scrollable").offset().top
            }, 500);
        }else if(!$("#email").val()||/@/.test($("#email").val())==false){
            $("#correct-email").css({"display":"block"});
            $(".email").addClass('active-label');
            $("#email").addClass('active-select');
            $("#fill-input").css({"display":"block"});
            $('html, body').animate({
                scrollTop: $("#position").offset().top
            }, 500);
        }
        else if(!$("#name").val()){
            $("#correct-name").css({"display":"block"});
            $(".name").addClass('active-label');
            $("#name").addClass('active-select');
            $("#fill-input").css({"display":"block"});
            $('html, body').animate({
                scrollTop: $("#email").offset().top
            }, 500);
        }
        else if(!$("#surname").val()){
            $("#correct-surname").css({"display":"block"});
            $(".surname").addClass('active-label');
            $("#surname").addClass('active-select');
            $("#fill-input").css({"display":"block"});
            $('html, body').animate({
                scrollTop: $("#email").offset().top
            }, 500);
        }
        else if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test($("#pwd1").val())==false){
            $("#correct-pwd1").css({"display":"block"});
            $(".pwd1").addClass('active-label');
            $("#pwd1").addClass('active-select');
            $("#fill-input").css({"display":"block"});
            $('html, body').animate({
                scrollTop: $("#surname").offset().top
            }, 500);
        }
        else if($("#pwd2").val()!=$("#pwd1").val()){
            $("#correct-pwd2").css({"display":"block"});
            $(".pwd2").addClass('active-label');
            $("#pwd2").addClass('active-select');
            $("#fill-input").css({"display":"block"});
        }
        else if(!$("#rules").is(':checked') || !$("#policy").is(':checked')){
            $("#fill-input").css({"display":"block"});
            $("#fill-input").html("გთხოვთ დაეთანხმოთ მოხმარების წესებს<br>და გაეცნოთ კონფიდენციალურობის პოლიტიკას");
        }
        else {
            $("#fill-input").css({"display":"none"});
            window.scrollTo(0, 0);
            $("#popup-bg").css({"display":"block"});
            $("#body").css({"overflow":"hidden"});
            changetext();
        }
    });
});
$(function() {
    $(".close").click(function() {
    $("#popup-bg").css({"display":"none"});
    $("#body").css({"overflow":"scroll"});
    });
});
  