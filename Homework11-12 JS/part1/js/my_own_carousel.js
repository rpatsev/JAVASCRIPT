(function($){

	$.fn.carousel = function(){
		var $moveLeft = $('.jcarousel__button--left');
		var $moveRight = $('.jcarousel__button--right');
		var $pictureLine = $('.jcarousel-list');
		
		
		var currentLeftValue = 0;
		var pixelsOffset = 800;
		var imageCount = $pictureLine.find('li').length;
		
		var minOffset = - (( imageCount - 1) * pixelsOffset);
		var maxOffset = 0;

		$moveLeft.click(function(e){
			/* console.log('done1'); */
			e.preventDefault;
			if 
			(currentLeftValue != maxOffset){
				currentLeftValue += pixelsOffset;
				$('.jcarousel-list').animate({left:currentLeftValue + 'px'}, 1000);
			};
		});
		
		$moveRight.click(function(e){
			e.preventDefault;
			/* console.log('done2'); */
			if 
 			(currentLeftValue != minOffset){
				currentLeftValue -= pixelsOffset;
				$('.jcarousel-list').animate({left:currentLeftValue + 'px'}, 1000);
			};
		});
		
	};
	
})(jQuery);
