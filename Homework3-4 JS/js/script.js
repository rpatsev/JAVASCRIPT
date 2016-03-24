'use strict'

var QForm = {
	body: document.body,
	quizForm: '',
	quizHeader: '',
	questionBox:'',
	question: [],
	questionName: [],
	optionBox: [],
	optionItem: [],
	optionCheckbox: '',
	optionLabel: '',
	finishButton:'',
	


	QuizFormCreate: function(){
		this.quizForm = document.createElement('form');
		this.quizForm.classList.add('quizForm');
		this.body.appendChild(this.quizForm);
	},

	HeaderCreate: function(){
		this.quizHeader = document.createElement('div');
		this.quizHeader.classList.add('quizHeader');
		this.quizHeader.innerHTML = 'Тест по программированию';
		this.quizForm.appendChild(this.quizHeader);
	},

	QuestionBoxCreate: function(){
		this.questionBox = document.createElement('ol');
		this.questionBox.classList.add('questionBox');
		this.quizForm.appendChild(this.questionBox);
		
		for (var i = 0; i < QBase.length; i++ ){
			this.QuestionCreate(i);
		};
		
	},
		
	QuestionCreate: function(i){
		this.question[i] = document.createElement('li');
		this.question[i].classList.add('question');
		this.questionBox.appendChild(this.question[i]);
		
		
		this.questionName[i] = document.createElement('p');
		this.questionName[i].classList.add('questionName');
		this.questionName[i].innerHTML = QBase[i].q;
		this.question[i].appendChild(this.questionName[i]);
		
		this.OptionBoxCreate(i);
	},	
	
	OptionBoxCreate: function(i){
		this.optionBox[i] = document.createElement('ul');
		this.optionBox[i].classList.add('optionBox');
		this.question[i].appendChild(this.optionBox[i]);
		
		for ( var j = 0; j < QBase[i].a.length; j++ ){
			this.OptionItemCreate(i,j);
		};
	},
	
	OptionItemCreate: function(i,j){
		this.optionItem = document.createElement('li');
		this.optionItem.classList.add('optionItem');
		this.optionBox[i].appendChild(this.optionItem);
		
		this.OptionLabelCreate(i,j);

	},
	
	OptionLabelCreate: function(i,j){
		
		
		this.optionCheckbox = document.createElement('input');
		this.optionCheckbox.classList.add('optionCheckbox');
		this.optionCheckbox.setAttribute('type','checkbox');
		this.optionCheckbox.setAttribute('id','label_'+i+'-'+j);
		this.optionItem.appendChild(this.optionCheckbox);	
						
		
		this.optionLabel = document.createElement('label');
		this.optionLabel.classList.add('optionLabel');
		this.optionLabel.innerHTML = QBase[i].a[j];
		this.optionLabel.setAttribute('for','label_'+i+'-'+j);
		this.optionItem.appendChild(this.optionLabel);
		
		//this.OptionCheckboxCreate(i,j);
	},
	
 /* 	OptionCheckboxCreate: function(i,j){
		
		this.optionName = document.createElement('p');
		this.optionName.classList.add('optionName');
		this.optionName.innerHTML = QBase[i].a[j];
		this.optionLabel.appendChild(this.optionName);  
		
	},*/
	
	
	
	FinishButtonCreate: function(){
		this.finishButton = document.createElement('input');
		this.finishButton.classList.add('submit');
		this.finishButton.setAttribute('type','submit');
		this.finishButton.setAttribute('value','Проверить мои результаты');
		this.quizForm.appendChild(this.finishButton);
	},
	
	
	Create: function(){
		this.QuizFormCreate();
		this.HeaderCreate();
		this.QuestionBoxCreate();
		this.FinishButtonCreate();
	}
		
}
	console.log('QForm',QForm);
	
	
	var QBase=[];

	// Question 1
	var q = {
		q:"Вопрос №1",
		a:[
		"Вариант ответа №1",
		"Вариант ответа №2"
		]
	}
	QBase.push(q);
	
	// Question 2
	var q = {
		q:"Вопрос №2",
		a:[
		"Вариант ответа №1",
		"Вариант ответа №2",
		"Вариант ответа №3",
		"Вариант ответа №4",
		"Вариант ответа №5"
		]
	}
	QBase.push(q);
	
	// Question 3
	var q = {
		q:"Вопрос №3",
		a:[
		"Вариант ответа №1",
		"Вариант ответа №2",
		"Вариант ответа №3"
		]
	}
	QBase.push(q);