'use strict';

$(function () {
	var tmpl = $('#myQuiz').html();
	tmpl = _.template(tmpl);

	var content = tmpl({
		QBase: QBase,
		result: result
	});

	$('body').append(content);

	localStorage.setItem('Database', JSON.stringify(QBase));

	var Data = localStorage.getItem('Database');

	Data = JSON.parse(Data);

	for (var i = 0; i < QBase.question.length; i++) {
		$('.optionBox' + i).addClass('inactive' + i);
		$('.inactive0').on('click', function () {
			if (this.checked) {
				$(this).removeClass('inactive0');
				$('.inactive0').attr('disabled', 'disabled');
			} else {
				$(this).addClass('inactive0');
				$('.inactive0').removeAttr('disabled', 'disabled');
			}
		});

		$('.inactive1').on('click', function () {
			if (this.checked) {
				$(this).removeClass('inactive1');
				$('.inactive1').attr('disabled', 'disabled');
			} else {
				$(this).addClass('inactive1');
				$('.inactive1').removeAttr('disabled', 'disabled');
			}
		});

		$('.inactive2').on('click', function () {
			if (this.checked) {
				$(this).removeClass('inactive2');
				$('.inactive2').attr('disabled', 'disabled');
			} else {
				$(this).addClass('inactive0');
				$('.inactive2').removeAttr('disabled', 'disabled');
			}
		});
	};

	$('button').on('click', myResult);
	var result = void 0;

	function myResult() {
		var $chBox = $('input:checked');
		for (var k = 0; k < $chBox.length; k++) {
			var str = $chBox.eq(k).attr('id');
			str = str.substr(str.indexOf('_') + 1);
			var _i = +str.substr(0, str.indexOf('_'));
			var j = +str.substr(str.indexOf('_') + 1);
			if (QBase.question[_i].a[j].flag) {
				result = 'Ответ  №' + ' ' + (j + 1) + ' ' + 'на вопрос №' + ' ' + (_i + 1) + ' ' + '<i class = "correct">' + 'верный' + '</i>' + '<br></br>';
				$('b').append(result);
			} else {
				result = 'Ответ  №' + ' ' + (j + 1) + ' ' + 'на вопрос №' + ' ' + (_i + 1) + ' ' + '<i class = "incorrect">' + 'неверный' + '</i>' + '<br></br>';
				$('b').append(result);
			}
		}
		var checkboxes = $('input');
		for (var _i2 = 0; _i2 < checkboxes.length; _i2++) {
			if (checkboxes[_i2].type == 'checkbox') {
				checkboxes[_i2].checked = false;
			}

			for (var a = 0; a < QBase.question.length; a++) {
				$('.optionBox' + a).addClass('inactive' + a).removeAttr('disabled');
			}
		}
	}
});

$(function () {
	$('button').on('click', function (e) {
		e.preventDefault();
		$('#overlay').fadeIn("slow", function () {
			$('#modal').animate({
				opacity: 1,
				height: 30 + '%'
			}, "slow");
		});
	});

	$('#modal_close, #overlay').on('click', function () {
		$('#modal').animate({
			opacity: 0,
			height: 0 }, "slow", function () {
			$('#overlay').fadeOut(400);
		});
		$('b').empty();
	});
});
