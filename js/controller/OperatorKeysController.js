App.OperatorKeysController = Ember.ObjectController.extend({
	
	actions : {

		del : function(){
			console.log('inside del');
			//this.get('target').send('del');
		},

		calculate : function(){
			console.log('calculate');
			//this.get('target').send('calculate');
		},

		operatorKeyedIn : function(key){
			console.log("operator keyed in");
			//this.get('target').send('operatorKeyedIn',key);
		}
	}
});