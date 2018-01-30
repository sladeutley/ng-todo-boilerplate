'use strict';

angular.module("todoApp").controller("LoginCtrl", function($scope, AuthFactory, $location) {
    $scope.test = "hello";

    $scope.register = () => {
        AuthFactory.createUser($scope.account)
        .then( (user) => {
            console.log('newUser', user);
            $scope.login();
        })
        .catch(function({ code, message }) {
        console.log("Oops", code, message);
      });
    };

    $scope.login = () => {
        AuthFactory.loginUser($scope.account).then(user => {
            console.log('logged in user', user);
            //send them to the list of todo items
            $location.url("/items/list");
        })
        .catch( (err) => {
            console.log("err");
        });
    };
});