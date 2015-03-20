App.NumberKeysView = Ember.View.extend({
	
	templateName : 'numberKeys',
	keys : [0,1,2,3,4,5,6,7,8,9,'.'],
	actions : {
		click : function(key){
			console.log(this.get('controller'));
			this.get('controller').send('numberKeyedIn',key);
		}
	}
});