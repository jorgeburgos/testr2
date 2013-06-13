define([
    'text!app/templates/content.view.html',
    'marionette'
], function(ContentViewTemplate, vent){
    var ContentView = Marionette.ItemView.extend({
        template: _.template(ContentViewTemplate),
        tagName: 'li',
        className: 'viewing',
        
        events: {
            'dblclick .view': 'edit',
            'blur .edit': 'saveAndClose',
            'keypress .edit': 'updateOnEnter',
        },
        
        ui: {
            input: 'input[type="text"]',
        },
        
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
        
        edit: function() {
            this.$el.addClass('editing');
            
            this.ui.input[0].selectionStart = 0;
            this.ui.input[0].selectionEnd = this.ui.input.val().length;
            this.ui.input.focus();
        },
        
        saveAndClose: function() {
            var title = this.ui.input.val();
            this.model.save({title: title});
            this.$el.removeClass('editing');
        },
        
        updateOnEnter: function(e) {
            if (e.keyCode != 13) return;
            this.saveAndClose();
        },
        
       

    });
    
    return ContentView;
});