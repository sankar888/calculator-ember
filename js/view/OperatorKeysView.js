App.OperatorKeysView = Ember.View.extend({
		templateName : 'operatorKeys',

		keys : function(){
			return this.get('controller').get('model.keys');
		}.property('controller.model.keys'),

		click : function(event){
			var key = event.target.value;
			switch (key){

				case '=' : 	this.get('controller').send('submitKeyedIn');
						 	break;
						 	
				case 'C' : 	this.get('controller').send('deleteKeyedIn');
							break;

				default :   this.get('controller').send('operatorKeyedIn',key);
							break;
			}
		}
});