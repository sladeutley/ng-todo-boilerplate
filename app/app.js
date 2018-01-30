"use strict";

angular.module("todoApp", ["ngRoute"])
.constant("FBUrl", "https://ng-to-boilerplate.firebaseio.com/") //a method thats a 'provider' (objects of data). whatever we name constant, it will be available in other places in our app
.config( ($routeProvider) => {
    // TODO: add controllers
    $routeProvider
    .when('/login', {
        templateUrl: "partials/user-form.html",
        controller: "LoginCtrl"
    })
    .when('/items/list', {
        templateUrl: "partials/item-list.html",
        controller: "ItemListCtrl"
    })
    .when('/items/new', {
        templateUrl: "partials/item-new.html",
        controller: "ItemNewCtrl"
    })
    .when('/items/deets/:id', {  //dynamic routing - we dont know how many items or what the id is
        templateUrl: "partials/item-details.html",
        controller: "ItemDetailCtrl"
    })
    .when('/items/deets/:id/edit', {
        templateUrl: "partials/item-new.html",
        controller: "ItemEditCtrl"
    })
    .otherwise("/items/list");
})
.run(FBCreds => {
    let creds = FBCreds;
    let authConfig = {
        apikey: creds.key,
        authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
});
// $scope.items = [
//   {
//     id: 0,
//     task: "mow the lawn",
//     isCompleted: false,
//     dueDate: "12/5/17",
//     assignedTo: "Greg",
//     location: "Joe's house",
//     urgency: "low",
//     dependencies: "sunshine, clippers, hat, water, headphones"
//   },
//   {
//     id: 1,
//     task: "grade quizzes, I mean Mastery Watzits",
//     isCompleted: false,
//     dueDate: "12/5/17",
//     assignedTo: "Joe",
//     location: "NSS",
//     urgency: "high",
//     dependencies: "wifi, tissues, vodka"
//   },
//   {
//     id: 2,
//     task: "take a nap",
//     isCompleted: false,
//     dueDate: "5/21/18",
//     assignedTo: "Joe",
//     location: "Porch of lakefront cabin",
//     urgency: "medium",
//     dependencies: "hammock, silence"
//   }
// ];
