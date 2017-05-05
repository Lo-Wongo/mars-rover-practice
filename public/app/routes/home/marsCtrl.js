angular.module('marsApp')
.controller('marsCtrl' , function($scope, marsSrv){
    $scope.x = ['Kyle','Britta','Cami','Madison'];


    $scope.getImages = function () {
        marsSrv.getImages().then(function (response) {
            // console.log(response.data.photos);
            $scope.photos = response.data.photos;
        })
    };
    $scope.getWeather = function(){
        marsSrv.getWeather().then(function (response) {
            console.log(response);
            $scope.weather = response;
        }, function (response) {
            console.log(response)
            $scope.weather = 'Martians must be interfering with the signal. Come back later.'
        })
    }
    $scope.getWeather();
    // $scope.getImages();
    
});