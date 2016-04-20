$(function(){
	var $field = $('input');
	console.log('input', $field);
	$field.hover(function(){
		var $assist = $(this).parent().find('.assist_hidden');
		$assist.show(250)},
		function(){
		$assist.hide(250)});
	
	var $button = $('button');
	var $assist = $('.assist_hidden');
	$button.on('click',function(){
		$assist.show(250)
		$assist.fadeOut(1000);
		});
	
});

$(function(){
	var $tab1 = 
});