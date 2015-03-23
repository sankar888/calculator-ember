App.OperatorKeysController = Ember.ObjectController.extend({
	
	needs : ['calculator'],
	calculator : Ember.computed.alias('controllers.calculator'),
	keys : ['+','-','*','/','^','(',')','C','='],
	actions : {
		click : function(key){
			
			switch (key){

				case '=' : 	this.get('calculator').send('submitKeyedIn');
						 	break;
						 	
				case 'C' : 	this.get('calculator').send('deleteKeyedIn');
							break;

				default :   this.get('calculator').send('operatorKeyedIn',key);
							break;
			}
		}
	}
});