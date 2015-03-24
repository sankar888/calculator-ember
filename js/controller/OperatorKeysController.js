App.OperatorKeysController = Ember.ObjectController.extend({
	
	needs : ['calculator'],
	calculator : Ember.computed.alias('controllers.calculator'),
	model : {
		keys : ['+','-','*','/','^','(',')','C','=']
	},
	actions : {
		submitKeyedIn : function(){
			this.get('calculator').send('submitKeyedIn');
		},
		deleteKeyedIn : function(){
			this.get('calculator').send('deleteKeyedIn');
		},
		operatorKeyedIn : function(key){
			this.get('calculator').send('operatorKeyedIn',key);
		}
	}
});