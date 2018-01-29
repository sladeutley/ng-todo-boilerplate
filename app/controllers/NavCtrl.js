'use strict';

angular.module("todoApp").controller("NavCtrl", function($scope, $location, FilterFactory) {

    $scope.searchTerm = FilterFactory;

    $scope.isActive = function(viewLocation) { //this kinda toggles the searchbar. look at navbar ng-show="isActive"
        return viewLocation === $location.path();
    };

    $scope.navItems = [
        {
            name: "Logout",
            url: "#!/logout"
        },
        {
            name: "Login",
            url: "#!/login"
        },
        {
            name: "All Items",
            url: "#!/items/list"
        },
        {
            name: "Add New Items",
            url: "#!/items/new"
        },
    ];
});