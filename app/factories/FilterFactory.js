'use strict';

//This is like requiring a module in vanilla js
angular.module("todoApp").factory("FilterFactory", function() {
    return {
        searchTerm: ""
    };
});