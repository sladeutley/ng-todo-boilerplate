'use strict';

angular.module("todoApp").controller("ItemNewCtrl", function($scope, ItemFactory, $location) {
    $scope.newTask = {
        task: "",
        isCompleted: false,
        dueDate: "",
        assignedTo: "",
        location: "",
        urgency: "",
        dependencies: ""
    };
//!!!!!!ng-option helps with dropdowns - for like urgency low or ungency high. This will help with capstone!!!

//need to bind our form that already exists in 'item-new.html' to this controller
//We do that by putting an ng-model in each of the form
    $scope.addNewItem = () => {
        console.log("New Item to add", $scope.newTask);
        ItemFactory.addNewItem($scope.newTask);
        $location.url("/items/list");
    };

});