angular.module('marsApp')
.directive('marsDir', function () {
    return {
        restrict: 'E',
        template: '<h6>Directive is functioning</h6>'
    }
});