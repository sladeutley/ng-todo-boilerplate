"use strict";

// need isAuth so that a user can't just add todos or go to other places on the website and mess around without being logged in
let isAuth = (AuthFactory) =>
  new Promise((resolve, reject) => {
    AuthFactory.isAuthenticated().then(userBool => {
      console.log("user???", userBool);
      if (userBool) {
        console.log("Authenticated user. Go ahead");
        resolve();
      } else {
        console.log("Not Authenticated user. Go away");
        reject();
      }
    });
  });

angular.module("todoApp", ["ngRoute"])
.constant("FBUrl", "https://ng-to-boilerplate.firebaseio.com/") //a method thats a 'provider' (objects of data). whatever we name constant, it will be available in other places in our app
.config( ($routeProvider) => {
    $routeProvider
    .when('/login', {
        templateUrl: "partials/user-form.html",
        controller: "LoginCtrl"
    })
    .when('/items/list', {
        templateUrl: "partials/item-list.html",
        controller: "ItemListCtrl",
        resolve: {isAuth}
        //what resolve does passes the data you put here, inject it as a dependency of the controller its associated with, and whatever data it is has to be completed/ resolved or the route will never load
    })
    .when('/items/new', {
        templateUrl: "partials/item-new.html",
        controller: "ItemNewCtrl",
        resolve: {isAuth}
    })
    .when('/items/deets/:id', {  //dynamic routing - we dont know how many items or what the id is
        templateUrl: "partials/item-details.html",
        controller: "ItemDetailCtrl",
        resolve: {isAuth}
    })
    .when('/items/deets/:id/edit', {
        templateUrl: "partials/item-new.html",
        controller: "ItemEditCtrl",
        resolve: {isAuth}
    })
    .otherwise("/login");
})
.run(FBCreds => {
    let creds = FBCreds;
    let authConfig = {
        apiKey: creds.key,
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
