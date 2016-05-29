$(function(e){
	e.preventDefault;
	$('.jcarousel').jcarousel({
		wrap: 'circular',
		animation: {
			duration: 1000,
			easing: 'linear',
		}
	});
	
	$('.jcarousel').jcarouselAutoscroll({
		interval:3000,
		target:'+=1',
		autostart:true
	});
	
	$('.jcarousel__button--left').jcarouselControl({target: '-=1'});
	$('.jcarousel__button--right').jcarouselControl({target: '+=1'});

	$("#default-usage-select").selectbox();
	
});

