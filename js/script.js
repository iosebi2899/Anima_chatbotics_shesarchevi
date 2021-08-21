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
      }else{
        $(".other-position").hide();
      }
    });
  });
  $(function () {
    $("#region").focus(function() {
        $('.arrow').toggleClass('active-arrow');
    });
    $("#region").change(function() {
        $('.arrow').toggleClass('active-arrow');
    });
  });
  $(function () {
    $("#position").focus(function() {
        $('.arrow2').toggleClass('active-arrow');
    });
    $("#position").change(function() {
        $('.arrow2').toggleClass('active-arrow');
    });
  });
  $(function () {
    $("#body").click(function() {
        $('.arrow2').removeClass('active-arrow');
        $('.arrow').removeClass('active-arrow');
    });
  });