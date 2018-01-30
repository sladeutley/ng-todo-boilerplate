"use strict";

angular
  .module("todoApp")
  .controller("ItemListCtrl", function($scope, FilterFactory, ItemFactory) {
    $scope.searchTerm = FilterFactory; //this is to get the filter in the search bar to autocomplete;

    // ItemFactory.getTodoItems()
    // .then( (itemsData) => {
    //     $scope.items = Object.values(itemsData.data); //have to do Object.values to return an array of given objects values
    //     console.log('$scope.items',$scope.items);
    // });
    ItemFactory.getTodoItems()
      .then(itemsData => {
        $scope.items = itemsData;
      })
      .catch(err => {
        console.log(err);
      });

    $scope.deleteTodoItem = itemId => {
      ItemFactory.deleteItem(itemId)
        .then(() => {
          // console.log("item deleted", data); no data returned on a delete
          ItemFactory.getTodoItems()
            .then(itemsData => {
              console.log("itemsData after delete", itemsData);
              $scope.items = itemsData;
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(err => {
          console.log("Item not deleted", err);
        });
    };
  });
