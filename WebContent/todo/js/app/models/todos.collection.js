define([
    'app/models/todo.model', 
    'backbone.localStorage'
], function(TodoModel, vent){
    var TodosCollection = Backbone.Collection.extend({
        model: TodoModel,
        localStorage: new Backbone.LocalStorage("todos-backbone"),
        
        addNewModel: function(title) {
            var ordered = this.size();
            var todoModel = new TodoModel({title: title, ordered: ordered});
            this.add(todoModel);
        },
        
        markAll: function(done) {
            this.each(function(todo){ todo.save({done: done}); });
        },
        
    });
    
    return TodosCollection;
});