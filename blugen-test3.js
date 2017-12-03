$(document).ready(function() {
$("div").css({
	'position':'absolute' ,
	'left':($(window).width() - $("div").width()) / 2 ,
	'top':($(window).height() - $("div").height()) / 2 });
$("div").fadeIn(3000);
$("h1").animate(4000 , function(){$("h1").slideDown(4000)});
$("p").animate(3000 , function(){$("p").slideDown(3000)});
$(".ok").animate({display:'none'}, function(){$(".ok").fadeIn(10000)});
$(".check").animate({left:'35px'} ,6000);
$("label").animate({left:'55px'} ,6000);
$(".sub").animate({right:'40px'} ,6000);
});