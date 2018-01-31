"use strict";

angular
  .module("todoApp")
  .controller("NavCtrl", function($scope, $location, $rootScope, $window, FilterFactory, AuthFactory) {
    $scope.searchTerm = FilterFactory;

    $scope.isActive = function(viewLocation) {
      //this kinda toggles the searchbar. look at navbar ng-show="isActive"
      return viewLocation === $location.path();
    };

    $scope.navItems = [
      {
        name: "Logout",
        url: "#!/logout"
      },
      {
        name: "Login",
        url: "#!/login",
        bang: "!"
      },
      {
        name: "All Items",
        url: "#!/items/list"
      },
      {
        name: "Add New Items",
        url: "#!/items/new"
      }
    ];
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        $scope.$apply(($scope.isLoggedIn = true));
        console.log("currentUser logged in?", user.uid);
        console.log("logged in t-f", $scope.isLoggedIn);
      } else {
        $scope.isLoggedIn = false;
        console.log("user logged in?", $scope.isLoggedIn);
        $scope.$apply();
        //$scope.$apply() - need to call it to make it update the scope.
        
        $window.location.href = "#!/login";
      }
    });

    $scope.navigate = navUrl => {
      console.log("navUrl", navUrl);
      if (navUrl === "#!/logout") {
        AuthFactory.logoutUser();
      } else {
        $window.location.href = navUrl;
      }
    };
  });

