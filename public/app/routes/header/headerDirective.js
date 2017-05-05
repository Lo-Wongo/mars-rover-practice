angular.module('marsApp')
.directive('headerDir', function () {
    return {
        restrict: "E",
        templateUrl: './app/routes/header/headerTemplate.html'
    }
})