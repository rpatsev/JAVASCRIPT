$(function(e){
	e.preventDefault;
	$('mycarousel').jcarousel({
		wrap: 'both',
		animation: {
			duration: 200,
			easing: 'linear',
		}
	});

	$('mycarousel').jcarouselAutoscroll({
		interval:1000,
		target:'+=1',
		autostart:true
		
	});
	
	$('mycarousel__button--left').jcarouselControl({target: '-=1'});
	$('mycarousel__button--right').jcarouselControl({target: '+=1'});

});