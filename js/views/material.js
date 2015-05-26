angular.module('myApp')
    .controller('MaterialController', ['$scope', '$mdSidenav', function($scope, $mdSidenav) {
        $scope.toggleSidenav = function(menuId) {
            $mdSidenav(menuId).toggle();
        };
        $scope.buttonName = 'New Note';
    }]);
