'use strict';

angular.module("todoApp").controller("NavCtrl", function($scope) {
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