function GoogleCallback (func, data){
	window[func](data);
	console.log(data);
}

$(function(){
	$('button').on('click', function(){
		$.ajax({
			url: 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&q='+ encodeURIComponent($('#searchfield').val())+'&callback=GoogleCallback&context=?',
			dataType: 'jsonp',
			method: 'GET',
			success: function(data){
				var ul = document.createElement('ul');
				$.each(data.results, function(i,val){
					var li = document.createElement('li');
					li.innerHTML = '<a href="'+val.url+'" title="'+val.url+'" target="_blank">'+val.title+"</a><br><p> "+val.content+"/p";
					ul.appendChild('li');
				});
				$('.result').append(ul);
			},
			error: function(){
				alert('Sorry, incorrect search words or bad gateway!');
			} 
 		});
		console.log(encodeURIComponent($('#searchfield').val()));
	});
});

