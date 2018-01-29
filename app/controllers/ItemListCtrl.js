"use strict";

angular.module("todoApp").controller("ItemListCtrl", function($scope, FilterFactory, ItemFactory) {

    $scope.searchTerm = FilterFactory; //this is to get the filter in the search bar to autocomplete;

    $scope.items = ItemFactory.getTodoItems();
});
