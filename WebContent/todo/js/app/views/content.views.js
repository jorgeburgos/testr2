define([
    'text!app/templates/content.views.html',
    'app/views/content.view',
    'marionette'
], function(ContentViewsTemplate, ContentView){
    var ContentViews = Backbone.Marionette.CompositeView.extend({
        template: _.template(ContentViewsTemplate),
        itemView: ContentView,
        itemViewContainer: '#todo-list'
        
    });
    
    return ContentViews;
});