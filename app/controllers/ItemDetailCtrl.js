'use strict';

angular.module("todoApp").controller("ItemDetailCtrl", function($scope, ItemFactory, $routeParams) { //$routeParams is linked up to the app.js where it says '/items/deets/:id'
    let todoItems = ItemFactory.getTodoItems();
    //
    $scope.selectedItem = todoItems.find( (item) => {
        return item.id === +$routeParams.id;
        //=== does strict comparison. there will never be a match because one is a string ($routeParams are always a string) and one is a number.
        //== doesn't need to have the + to make string a number, but not as secure
    });
});