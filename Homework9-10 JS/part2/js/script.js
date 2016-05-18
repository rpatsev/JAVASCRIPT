$(function(){
	$('.dropdown').hover(
		function(){
			$(this).children('.submenu').slideDown(500);
		},
 		function(){
			$(this).children('.submenu').slideUp(500);
		}
	);
		
 	$("nav").mouseenter(
		function(){
			$(this).animate({
				backgroundColor:"#2E7E98",
			},500);
		}	
	);
	
	$("nav").mouseleave(
		function(){
			$(this).animate({
				backgroundColor:"#2E7E00",
			},500);
		}
	);
 	
	 $('.dropdown').mouseenter(
		function(){
			$(this).children('.submenu').animate({
				backgroundColor:"#EEEE22",
			},500);
		}	
	);
	
	$('.dropdown').mouseleave(
		function(){
			$(this).children('.submenu').animate({
				backgroundColor:"#E14B4B",
			},500);
		}
	);

});