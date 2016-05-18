$(function(){
	var $field = $('input');
	$field.hover(function(){
		var $assist = $(this).parent().find('.assist_hidden');
		$assist.show(250)},
		function(){
		$assist.hide(250)});
	
	var $button = $('button');
	var $assist = $('.assist_hidden');
	$button.on('click',function(){
		$assist.show(250)
		$assist.fadeOut(2000);
		});
	
});

$(function(e){
	e.preventDefault;
	$('ul.tabs__menu li:first').attr ('id','selected');
	$('ul.tabs__area li:first').css('display','block');
	$('ul.tabs__menu').on('click','li:not(#selected)', function(){
		$(this).attr ('id','selected').siblings().removeAttr('id','selected')
				.parents('.tabs').find('.tabs__area li').hide()
				.eq($(this).index()).fadeIn("fast");
	});
	
});