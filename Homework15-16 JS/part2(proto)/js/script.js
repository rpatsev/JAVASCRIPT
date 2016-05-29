'use strict';
$(function(){
	

	var human = {
		name : 'Roman',
		sex : 'male',
		height : 180,
		weight : 85,
		age : 25,
		iq : 100,
		income: 100,
	};

	function Student(){
		this.college = "Yaroslav Mudriy";
		this.income = 150;
		this.watchMovies = function(){
			alert('Cool! What a great sitcom!');
			this.iq -=5;
			this.weight +=1;
		};
		this.__proto__ = human;
	};
	
	function Worker(){
		this.workplace = "Telesens Ventures";
		this.work = function(){
			alert("It's been a hard day!");
			this.income += 500;
			this.iq +=5 ;
		}
		this.__proto__ = human;
	};

	var newStudent = new Student("Liz");
	var newWorker = new Worker("Fedor");
	
	$('.work').on('click',function(){
		
		newWorker.work();	
		console.log('newWorker', newWorker);
			
	});
	
	$('.watch').on('click',function(){
	
		newStudent.watchMovies();
		console.log('newStudent',newStudent);
			
	});
	

	

	console.log('newWorkers age', newWorker.age);
	console.log('newStudent height',newStudent.height);
	
	
})
	

