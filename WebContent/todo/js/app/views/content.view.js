define([
    'text!app/templates/content.view.html',
    'marionette'
], function(ContentViewTemplate, vent){
    var ContentView = Marionette.ItemView.extend({
        template: _.template(ContentViewTemplate),
        tagName: 'li',
        className: 'viewing',
        
        initialize: function() {
            this.model.on("change", this.render, this);
        },
        
        onRender: function() {
            if (this.model.get('done')) {
                this.$el.addClass('done');
            } else {
                this.$el.removeClass('done');
            }
        },
        
       

    });
    
    return ContentView;
});