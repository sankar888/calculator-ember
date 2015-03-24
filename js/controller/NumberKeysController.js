App.NumberKeysController = Ember.ObjectController.extend({
	
	needs : ['calculator'],
	calculator : Ember.computed.alias('controllers.calculator'),
	model : {
		keys : ['0','1','2','3','4','5','6','7','8','9','.']
	},
	actions : {
		numberKeyedIn : function(key){
			this.get('calculator').send('numberKeyedIn',key);
		}
	}
});