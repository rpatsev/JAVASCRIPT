'use strict'

$(function(){
	let tmpl =  $('#myQuiz').html();
    tmpl = _.template(tmpl);

    let content = tmpl({
      QBase: QBase,
	  result: result
    });
	
	$('body').append(content);
	
		
	localStorage.setItem('Database',JSON.stringify(QBase));

	let Data = localStorage.getItem('Database');

	Data = JSON.parse(Data);
	
	for(let i in QBase){
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
		};

	
	$('button').on('click', myResult);
	let result;
	
	function myResult(){
		let $chBox = $('input:checked');
		for(let k in chBox) {
			let str = $chBox.eq(k).attr('id');
			str = str.substr(str.indexOf('_')+1);
			let i = +str.substr(0,str.indexOf('_'));
			let j = +str.substr(str.indexOf('_')+1);
			if (QBase.question[i].a[j].flag){
				result = 'Ответ  №' + ' ' + (j+1) + ' ' + 'на вопрос №' + ' ' + (i+1) + ' '  + '<i class = "correct">' + 'верный' + '</i>' + '<br></br>';
				$('b').append(result);
			} else {
				result = 'Ответ  №' + ' ' + (j+1) + ' ' + 'на вопрос №' + ' ' + (i+1) + ' ' + '<i class = "incorrect">' + 'неверный' + '</i>' + '<br></br>';
				$('b').append(result);
			}
		}
		let checkboxes = $('input');
		for (let i in checkboxes){
			if (checkboxes[i].type == 'checkbox'){
				checkboxes[i].checked = false;
		    }
		
		for (let a=0; a<QBase.question.length; a++){
			$('.optionBox'+a).addClass('inactive'+a).removeAttr('disabled');
		}
			
		}
	}
});

$(function() { 
	$('button').on('click',function(e){ 
		e.preventDefault(); 
		$('#overlay').fadeIn("slow",function(){ 
				$('#modal').animate({
									opacity: 1,
									height: 300 + 'px'
									}, "slow"); 
		});
	});

	$('#modal_close, #overlay').on('click',function(){ 
		$('#modal').animate({
			opacity: 0,
			height: 0}, "slow", function(){
								$('#overlay').fadeOut(400); 
			}
		);
		$('b').empty();
	});
});
