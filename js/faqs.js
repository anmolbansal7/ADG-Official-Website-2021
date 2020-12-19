$(document).ready(function(){
  $(".accordion-header").click(function(){
    $(".accordion-header").removeClass("active");
    $(this).toggleClass("active");
  })
});