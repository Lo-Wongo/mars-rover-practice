angular.module('marsApp')
.directive('marsDir', function () {
    return {
        restrict: 'E',
        template: '<input type="text">'
    }
});