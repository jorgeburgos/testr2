define(['app/views/content.views','backbone'
], function(contentViews){
	
	var Router = Backbone.Router.extend({
	    
	    initialize: function() {
            app.addRegions({
                content: '#todoapp > #content',
                footer: '#todoapp > footer'
            });
            
            var contentViews = new ContentViews();
            app.content.show(contentViews);
        },
	    
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