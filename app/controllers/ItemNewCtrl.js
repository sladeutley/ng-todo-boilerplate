"use strict";

angular
  .module("todoApp")
  .controller("ItemNewCtrl", function($scope, ItemFactory, $location) {
    $scope.title = "New";
    $scope.todoItem = {
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
    $scope.saveItem = () => {
      console.log("New Item to add", $scope.todoItem);
      ItemFactory.addNewItem($scope.todoItem)
      .then(data => {
        $location.url("/items/list");
      });
    };
    // ItemFactory.addNewItem(todoItem)
    // .then((todoItem) => {
    //     $scope.newTask = todoItem.data;
    //     console.log('$scope.newTask',$scope.newTask);
    //                  for (let item in todoItem) {
    //                      let keys = Object.keys(customers[item])
    //                      console.log(keys);
    //                      keys.forEach( (key) => {
    //                          customers[status][key].id = key;
    //                           });
    //              })
  });
