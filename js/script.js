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