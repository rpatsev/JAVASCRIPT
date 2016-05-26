'use strict'

$(function(){
	var html = $('myQuiz').html();
	
	
	var content = tmpl(html,{
		data:QBase
	});
	
	$('body').append(content);
})
	
