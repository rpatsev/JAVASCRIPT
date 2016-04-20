'use strict'

var time = 0;
var start = document.getElementById('start');
var pause = document.getElementById('pause');
var stop = document.getElementById('stop');
var stopwatch;

start.addEventListener('click', startStopwatch);
pause.addEventListener('click', pauseStopwatch);
stop.addEventListener('click', stopStopwatch);
	
function startStopwatch(){
	stopwatch = setInterval(function(){
		time++;
		var h = (time/360000) >> 0;
		var m = ((time-h*360000)/6000) >> 0;
		var s = ((time-h*360000-m*6000)/100) >> 0;
		var ms = time - h* 360000 - m * 6000 - s*100;
		
		if (ms<10){
			ms = '0' + ms;
		};
		if (m<10){
			m = '0' + m;
		};
		if (s<10){
			s = '0' + s;
		};
		if (h<10){
			h = '0' + h;
		};
		
		
		document.getElementById('stopwatch').innerHTML = '' + h + ':' + m + ':' + s + '.' + ms;
	}, 10);
	start.style.display = 'none';
	pause.style.display = 'block';
};

function stopStopwatch(){
	pause.style.display = 'none';
	start.style.display = 'block';
	time = 0;
	clearTimeout(stopwatch);
	document.getElementById('stopwatch').innerHTML ="00:00:00.00"
};

function pauseStopwatch(){
	pause.style.display = 'none';
	start.style.display = 'block';
	clearTimeout(stopwatch);
};

console.log('Stopwatch',stopwatch);