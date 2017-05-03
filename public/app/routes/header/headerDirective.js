angular.module('marsApp')
.directive('headerDir', function () {
    return {
        restrict: "E",
        templateUrl: 'headerTemplate.html'
    }
})