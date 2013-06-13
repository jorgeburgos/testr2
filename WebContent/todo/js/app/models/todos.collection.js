define([
    'app/models/todo.model', 
    'backbone.localStorage'
], function(TodoModel, vent){
    var TodosCollection = Backbone.Collection.extend({
        model: TodoModel,
        localStorage: new Backbone.LocalStorage("todos-backbone"),
    });
    
    return TodosCollection;
});