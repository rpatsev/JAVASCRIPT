
function arr (){

	var arrNames = [];

	for (var i = 0; i < 5; i++ ){
		arrNames[i] = prompt('Введите имя');
		console.log('arrNames =',arrNames);
	}

	var login = prompt('Введите имя пользователя','имя');
	var flag = false;
	console.log('login =',login);
	
	for (var i = 0; i < arrNames.length; i++){
		if (login === arrNames[i]) {
			flag = true;
		}

	}

	if (flag){
		alert(login + ', Вы успешно вошли')
	} else {
		alert('К сожалению, Вам не удалось войти');
	}
}

function pow (){
	
 
	var x = prompt("Введите число","Число");
	var n = prompt("Введите степень","Степень");

	if (x % 1 !== 0) {
	alert('Число '+x+' не поддерживается, введите целое число');
	} else if (n % 1 !== 0){
	alert ('Степень '+n+' не поддерживается, введите целое число');
	} else if (n < 0) {
	alert (negativeInvolution (x,n)); 
	} else {
	alert (positiveInvolution (x,n));
	}
	
	
	
	function positiveInvolution (x,n){
		
	var result = 1;
	for(i = 0; i < n; i++ ){
		result *= x;
	}
	
	console.log ('результат = ', result);	
	return result;
	}
	
		
	function negativeInvolution (x,n){
		
	var result = 1;
	for(i = 0; i < n; i++ ){
		result *= x;
	}
	
	var fraction = (1 / result);
	console.log ('результат = ', fraction);	
	return fraction;
	
	}
	
}
