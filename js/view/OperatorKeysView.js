App.OperatorKeysView = Ember.View.extend({
	
	templateName : 'operatorKeys',
	keys : ['+','-','*','/','^','(',')','C','='],
	actions : {
		click : function(key){
			console.log("click send to view");
			if('=' === key){
				this.get('controller').send('calculate');
			}
			else if('C' === key){
				this.get('controller').send('del');
			}
			else{
				this.get('controller').send('operatorKeyedIn', key);
			}
		}
	}
});