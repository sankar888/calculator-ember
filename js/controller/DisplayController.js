App.DisplayController = Ember.ObjectController.extend({
	
	value : "",

	show : function(key){
		this.set('value', key);
	},

	clear : function(){
		this.set('value','');
	},

	append : function(key){
		this.set('value', this.get('value')+key);
	},

	clearLast : function(){
		var val = this.get('value');
		if(val.length > 0){
			val = val.substring(0,val.length-1);
		}
		this.set('value',val);
	}
});