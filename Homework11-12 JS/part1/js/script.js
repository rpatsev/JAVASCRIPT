$(function(){

	var $moveLeft = $('.jcarousel__button--left');
	var $moveRight = $('.jcarousel__button--right');
	var $pictureLine = $('.jcarousel-list');
	
	
	var currentLeftValue = 0;
	var pixelsOffset = 800;

	$moveLeft.click(function(){
		currentLeftValue += 800;
		pictureLine.animate({left:currentLeftValue + 'px'}, 1500);
	});
	
	$moveRight.click(function(){
		currentLeftValue -= 800;
		pictureLine.animate({left:currentLeftValue + 'px'}, 1500);		
	});
	
});

