"use strict";

angular
  .module("todoApp")
  .controller("LoginCtrl", function($scope, AuthFactory, $window) {
    $scope.register = () => {
      AuthFactory.createUser($scope.account)
        .then(user => {
          console.log("newUser", user);
          $scope.login();
        })
        .catch(function({ code, message }) {
          console.log("Oops", code, message);
        });
    };

    $scope.login = () => {
      AuthFactory.loginUser($scope.account)
        .then(user => {
          console.log("logged in user", user);
          //send them to the list of todo items
          $window.location.href = "#!/items/list";
          // for some reason need $window instead of $location bc it doesn't need something to set it off
        })
        .catch(err => {
          console.log("err");
        });
    };
    $scope.logout = () => {
      AuthFactory.logoutUser().then(data => {
        console.log("logged out", data);
      });
    };
  });
