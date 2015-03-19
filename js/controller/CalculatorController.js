App.ApplicationController = Ember.ObjectController.extend({
	
	version : '1',
	expression : '',
	keys : [1,2,3,4,5,6,7,8,9,0,'+','-','/','*','.'],
	actions : {
		clicked : function(e){
			console.log(this.get('expression'));
			var val = this.get('expression');
			val += e;
			this.set('expression', val);
		},
		evaluate : function(){
			var result;
			try{
				result = window.eval(this.get('expression'));
			}catch (e){
				retult = 'invalid';
			}
			this.set('expression', result);
		}
	}
});