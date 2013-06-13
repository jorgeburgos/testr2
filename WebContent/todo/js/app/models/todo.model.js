define([
    'backbone'
], function(){
    var Todo = Backbone.Model.extend({
        defaults: {
            title: "empty todo...",
            ordered: null,
            done: false
        }
    });
    
    return Todo;
});