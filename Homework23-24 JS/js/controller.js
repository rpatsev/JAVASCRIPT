 function Controller(model, view){
			var self = this;
			
			view.elements.addbtn.on('click', addItem);
			view.elements.listContainer.on('click','.todolist__delete', removeItem);
			view.elements.addremove.on('click', removeAllItem);

			
			function addItem(){
				var newItem = view.elements.input.val();
				model.addItem(newItem);
				view.renderList(model.data);
				view.elements.input.val('');
			};
			
			function removeItem(){
				var item = $(this).attr('data-value');
				
				model.removeItem(item);
				view.renderList(model.data);
			};
			
			function removeAllItem(){
				var item = $(this).attr('data-value');
				
				model.removeAllItem(item);
				view.renderList(model.data);
			};
}	
