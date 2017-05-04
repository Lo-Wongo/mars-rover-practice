angular.module('marsApp', ['ui.router']);
angular.module('marsApp')
.directive('headerDir', function () {
    return {
        restrict: "E",
        templateUrl: 'headerTemplate.html'
    }
})
angular.module('marsApp')
.controller('marsCtrl' , ["$scope", "marsSrv", function($scope, marsSrv){
    $scope.x = ['Kyle','Britta','Cami','Madison'];


    $scope.getImages = function () {
        marsSrv.getImages().then(function (response) {
            console.log(response.data.photos);
            $scope.photos = response.data.photos;
        })
    };


    $scope.getImages();
    
}]);
angular.module('marsApp')
.directive('marsDir', function () {
    return {
        restrict: 'E',
        template: '<h6>Directive is functioning</h6>'
    }
});
angular.module('marsApp')
.service('marsSrv' , ["$http", function($http){
    let baseURL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=';
    let key = 'bDTHnNfXlX9xa3CilBg85EbfUe4F2gNBx8EDnZHU'


    this.getImages = function (rover) {
        return $http({
            method: "GET",
            url: baseURL + key
        })
    }

}]);