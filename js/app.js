App = Ember.Application.create();

App.Router.map(function(){

	this.resource('calculator',{ path : '/'},function(){
		this.resource('display');
		this.resource('numberKeys');
		this.resource('operatorKeys');
	})
});
