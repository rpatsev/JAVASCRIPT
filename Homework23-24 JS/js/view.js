function View(model){
			var self = this;
			function init(){
				var wrapper = tmpl($('#wrapper--template').html());
				$('body').append(wrapper);

				self.elements = {
					input: $('.todolist__enter'),
					addbtn: $('.todolist__add'),
					addremove: $('.todolist__remove'),
					listContainer: $('.todolist')
				};
				self.renderList(model.data);
			};
			
			self.renderList = function (data) {
				var list = tmpl($('#list--template').html(), {data:data});
				self.elements.listContainer.html(list);
			};
			
			init();
		}



