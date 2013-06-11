requirejs.config({
    paths: {
       jquery: "libs/jquery-1.9.0",
       underscore: "libs/underscore",
       backbone: "libs/backbone",
       router: "app/configurations/router",
       marionette: "libs/backbone.marionette",
       text: "libs/text"
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
        
        marionette: {
            deps: ['jquery', 'underscore', 'backbone'],
            exports: 'Marionette'
        }
    }
});

require(['router']);