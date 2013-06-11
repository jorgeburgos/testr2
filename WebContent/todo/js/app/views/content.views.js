define([
    'text!app/templates/content.views.html',
    'marionette'
], function(ContentViewsTemplate){
    var ContentViews = Backbone.Marionette.CompositeView.extend({
        template: _.template(ContentViewsTemplate),
        itemViewContainer: '#todo-list',
        
    });
    
    return ContentViews;
});