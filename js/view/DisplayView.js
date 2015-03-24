App.DisplayView = Ember.View.extend({
	
	templateName : 'display',
	value  : function(){
		return this.get('controller').get('model.value');
	}.property('controller.model.value')
});