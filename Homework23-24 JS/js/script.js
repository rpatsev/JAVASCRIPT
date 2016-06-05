	requirejs.config({
		paths: {
			'jquery': 'http://code.jquery.com/jquery-2.2.4.min',
		},
		shim: {
			'jquery': {
				exports: 'jquery'
			}
		}
	});


 require(
	['jquery','tmpl','model','view','controller'],
		function(){
			$(function(){
				var InitialToDoList = ['make an exercise','go gym','jump'];
				var model = new Model(InitialToDoList);
				var view = new View (model);
				var controller = new Controller(model, view);
			});
			
 		});