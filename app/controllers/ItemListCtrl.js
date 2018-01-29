"use strict";

angular.module("todoApp").controller("ItemListCtrl", function($scope, ItemFactory) {
  $scope.items = ItemFactory.getTodoItems();
});
