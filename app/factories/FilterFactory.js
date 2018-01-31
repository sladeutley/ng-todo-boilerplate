'use strict';

//This is like requiring a module in vanilla js
angular.module("todoApp").factory("FilterFactory", function() {
    return {
        searchTerm: ""
    };
});

// because its an object, its a reference, so when one changes the other one changes
// this is so controllers don't interfere???