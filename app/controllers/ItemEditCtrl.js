'use strict';

angular.module("todoApp").controller("ItemEditCtrl", function($scope, ItemFactory, $routeParams, $location) {
    $scope.title = "Edit";

    ItemFactory.getTodoItem($routeParams.id)
    .then( (item) => {
        $scope.todoItem = item;
    });

    $scope.saveItem = () => {
        console.log("todoItem", $scope.getTodoItem);
        ItemFactory.updateItem($scope.todoItem, $routeParams.id)
        .then( (data) => {
            $location.url(`/items/deets/${$routeParams.id}`);
        });
    };
});

