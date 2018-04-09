var height = $(window).height();

$('#vid1').css("height", height +"px");

$('.menuItem').hover(function(){
    $(this).css("color", "green");
}, function(){
    $(this).css("color", "white");
})


$(document).ready(function(){
    $('#mainContainer').fadeIn(1500);
    $('#asterisk').delay(600).fadeIn(900);
    $('#cloud').delay(1300).fadeIn(900);
    $('#fire').delay(2000).fadeIn(900);
    $('#cardOverlay').delay(2700).animate({top: "-80px"}, 500);
    $('#postCodeInput').delay(2500).fadeIn(3500);
})