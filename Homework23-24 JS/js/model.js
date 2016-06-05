function Model(data){
			var self = this;
			self.data = data;
			
			self.addItem = function (item){
				if (item.length === 0){
					return;
				}
				self.data.push(item);
				
				return self.data;
				
			};
			
			self.removeItem = function (item){
				var index = self.data.indexOf(item);
				
				if(index === -1){
					return;
				}
				
				
				self.data.splice(index, 1);
				
				return self.data;
			};
			
			self.removeAllItem = function(item){
				self.data.length = 0;
				
				return self.data;
			};
		}

