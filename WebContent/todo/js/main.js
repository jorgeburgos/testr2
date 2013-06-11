requirejs.config({
    paths: {
       jquery: "libs/jquery-1.9.0",
       underscore: "libs/underscore",
       backbone: "libs/backbone",
       router: "app/configurations/router"
       
    },
    
    // We shim Backbone since it doesn't an AMD module
    shim: {
        jquery: {
            exports: 'jQuery'
        },
        
        underscore: {
            exports: '_'
        },
        
        
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
    }
});

require(['router']);