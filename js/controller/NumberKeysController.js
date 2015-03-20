App.NumberKeysController = Ember.ObjectController.extend({
	
	actions : {
		numberKeyedIn : function(key){
			console.log("coming to controller" + key);
			console.log(this.get('target'));
			//this.get('target').send('numberKeyedIn', key);
		}
	}
});