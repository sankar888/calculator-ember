App.NumberKeysView = Ember.View.extend({
		templateName : 'numberKeys',

		keys : function(){
			return this.get('controller').get('model.keys');
		}.property('controller.model.keys'),

		click : function(e){
			this.get('controller').send('numberKeyedIn',e.target.value);
		}
});