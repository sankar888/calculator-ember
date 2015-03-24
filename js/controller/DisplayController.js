App.DisplayController = Ember.ObjectController.extend({
	
	model : {
		value : ''
	},
	show : function(key){
		this.set('model.value', key);
	},

	clear : function(){
		this.set('model.value','');
	},

	append : function(key){
		this.set('model.value', this.get('model.value')+key);
	},

	clearLast : function(){
		var val = this.get('model.value');
		if(val.length > 0){
			val = val.substring(0,val.length-1);
		}
		this.set('model.value',val);
	}
});