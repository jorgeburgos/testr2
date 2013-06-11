define(['backbone'
], function(){
	
	var Router = Backbone.Router.extend({
	    routes: {
			"": "home"
		},
		
		home: function() {
			console.log("Router is working fine!!!");
		}
	
	});
	
	router = new Router();
	Backbone.history.start();
	
	return router;
});