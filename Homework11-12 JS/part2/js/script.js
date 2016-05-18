$(function(){
	var html = $('#myPage').html();
	var info = [
		{
			name:'Пацев Роман Сергеевич',
			img:'img/img1.jpg',
			college:'Студент юридического университета имени Ярослава Мудрого'
		},
		{
			benefit:['Это интересно',
			'Можно расти и развиваться',
			'Здесь нет блата']
		},
		{
			phonenumber:['+380951201436','+380660921064','+79783226439']
		},
		{
			sociallink:'http://vk.com/roman_patsev',
			network:'vk.com'
		},
		{
			skill:'Если нужно, могу сказать вам, когда была принята Конституция Украины'
		}
		
	];
	var content = tmpl(html,{
		data:info
	});
	
	$('body').append(content);

});

