// 'use strict';


$(function(){
	var html = $('#myQuiz').html();
	var result;
	
	var content = tmpl(html,{
		QBase: QBase,
		result: result
	});
	
	$('body').append(content);
	

	
	localStorage.setItem('Database',JSON.stringify(QBase));

	var Data = localStorage.getItem('Database');

	Data = JSON.parse(Data);

	 for(var i=0; i<QBase.question.length;i++){
		$('.optionBox'+i).addClass('inactive'+i);
		$('.inactive0').on('click',function(){
			if(this.checked){
				$(this).removeClass('inactive0');
				$('.inactive0').attr('disabled','disabled');
			}
			else {
				$(this).addClass('inactive0');
				$('.inactive0').removeAttr('disabled','disabled');
			}
			});
			
		$('.inactive1').on('click',function(){
			if(this.checked){
				$(this).removeClass('inactive1');
				$('.inactive1').attr('disabled','disabled');
			}
			else {
				$(this).addClass('inactive1');
				$('.inactive1').removeAttr('disabled','disabled');
			}
			});
			
		$('.inactive2').on('click',function(){
			if(this.checked){
				$(this).removeClass('inactive2');
				$('.inactive2').attr('disabled','disabled');
			}
			else {
				$(this).addClass('inactive0');
				$('.inactive2').removeAttr('disabled','disabled');
			}
		});
		}

		
	function Result(){
		var result;
		var $check = $('.quizBlock input:checked');
		for(a = 0;a < $check.length;a++){
			var str = $check.eq(a).attr('id');
			str = str.substr(str.indexOf('_')+1);
			var i = +str.substr(0,str.indexOf('_'));
			var j = +str.substr(str.indexOf('_')+1);
			if (QBase.question[i].a[j].flag){
				result = 'Answer' + ' ' + (j+1) + ' ' + 'on question' + ' ' + (i+1) + ' ' + '<span>' + 'true' + '</span>' + '<br></br>';
				$('p').append(result);
			} else {
				result = 'Answer' + ' ' + (j+1) + ' ' + 'on question' + ' ' + (i+1) + ' ' + '<span>' + 'false' + '</span>' + '<br></br>';
				$('p').append(result);
			}
		}
		var optionBox = $('.quizBlock input');
		for (var i=0; i<optionBox.length; i++){
			if (optionBox[i].type == 'checkbox'){
				optionBox[i].checked = false;
		  }
		  $('.optionBox0').addClass('inactive0').removeAttr('disabled');
		  $('.optionBox1').addClass('inactive1').removeAttr('disabled');
		  $('.optionBox2').addClass('inactive2').removeAttr('disabled');
		}
	}
	
		
 	$('#check-results').on('click', function(e){
		e.preventDefault;
		$('#overlay').fadeIn(400,function(){ 
		$('#modal_form').css('display', 'block') 
								.animate({
									opacity: 1,
									top: '30%'
								}, 200);
		});
	});

	$('#modal_close, #overlay').on('click',function(){ 
		$('#modal_form').animate({
							opacity: 0, 
							top: '25%'
						}, 200, function(){
									$(this).css('display', 'none'); 
									$('#overlay').fadeOut(400); 
								}
		);
		$('p').empty();
	});
});	
	
