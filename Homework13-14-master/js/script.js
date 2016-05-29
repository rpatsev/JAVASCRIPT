'use strict'

$(function(){
	var tmpl =  $('#myQuiz').html();
    tmpl = _.template(tmpl);

    var content = tmpl({
      QBase: QBase,
	  result: result
    });
	
	$('body').append(content);
	
		
	localStorage.setItem('Database',JSON.stringify(QBase));

	var Data = localStorage.getItem('Database');

	Data = JSON.parse(Data);
	
	for(var i=0; i<QBase.question.length;i++){
		$('.check'+i).addClass('inactive'+i);
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
		};

	
	$('button').on('click', myResult);
	var result;
	
	function myResult(){
		var $chBox = $('input:checked');
		for(var k=0; k< $chBox.length; k++) {
			var str = $chBox.eq(k).attr('id');
			str = str.substr(str.indexOf('_')+1);
			var i = +str.substr(0,str.indexOf('_'));
			var j = +str.substr(str.indexOf('_')+1);
			if (QBase.question[i].a[j].flag){
				result = 'Ответ  №' + ' ' + (j+1) + ' ' + 'на вопрос №' + ' ' + (i+1) + ' '  + 'верный' + '<br></br>';
				$('p').append(result);
			} else {
				result = 'Ответ  №' + ' ' + (j+1) + ' ' + 'на вопрос №' + ' ' + (i+1) + ' ' + 'неверный' + '<br></br>';
				$('p').append(result);
			}
		}
		var checkboxes = $('input');
		for (var i=0; i<checkboxes.length; i++){
			if (checkboxes[i].type == 'checkbox'){
				checkboxes[i].checked = false;
		  }
		  $('.check0').addClass('inactive0').removeAttr('disabled');
		  $('.check1').addClass('inactive1').removeAttr('disabled');
		  $('.check2').addClass('inactive2').removeAttr('disabled');
		}
	}
});

$(function() { 
	$('button').on('click',function(e){ 
		e.preventDefault(); 
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
