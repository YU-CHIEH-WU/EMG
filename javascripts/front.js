var app = angular.module('frontApp', ['frontApp']);
app.controller('frontController', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.isVideoDone = false;
    $timeout(function() {
        $scope.isVideoDone = true;
    }, 5000)
}]);
