define([
    'text!app/templates/content.views.html',
    'app/views/content.view',
    'marionette'
], function(ContentViewsTemplate, ContentView){
    var ContentViews = Backbone.Marionette.CompositeView.extend({
        template: _.template(ContentViewsTemplate),
        itemView: ContentView,
        itemViewContainer: '#todo-list',
        
        initialize: function(){
            _.bindAll(this,"createOnEnter");
        },
        
        events: {
            "keypress #new-todo": "createOnEnter",
            "click #toggle-all": "markAll"
        },
        
        ui: {
            title: '#new-todo',
            allCheckbox: "#toggle-all"
        },
        
        createOnEnter: function(e) {
            if (e.keyCode != 13) return;
            
            var title = $.trim(this.ui.title.val());
            this.collection.addNewModel(title);
            this.ui.title.val("");
        },
        
        markAll: function() {
            var done = this.ui.allCheckbox[0].checked;
            this.collection.markAll(done);
        },
        
    });
    
    return ContentViews;
});