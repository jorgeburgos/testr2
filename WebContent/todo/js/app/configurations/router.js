define([
    'app/configurations/application',
    'app/views/content.views',
    'app/models/todos.collection',
    'backbone'
], function(app, ContentViews, TodosCollection){
	
	var Router = Backbone.Router.extend({
	    
	    initialize: function() {
            app.addRegions({
                content: '#todoapp > #content',
                footer: '#todoapp > footer'
            });
            
            
            var todosCollection = new TodosCollection([{title: "test item"}]);
            var contentViews = new ContentViews({collection: todosCollection});
            app.content.show(contentViews);
            
            //todosCollection.fetch();
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