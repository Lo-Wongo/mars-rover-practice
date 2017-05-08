angular.module('marsApp')
.controller('marsCtrl' , function($scope, marsSrv){

    $scope.getImages = function () {
        marsSrv.getImages().then(function (response) {
            console.log(response.data.photos);
            $scope.photos = response.data.photos;
        }, function (response) {
            console.log(response)
            $scope.imageError = 'Martians must be interfering with the signal. Please come back later.';
        })
    };
    
    $scope.getWeather = function(){
        marsSrv.getWeather().then(function (response) {
            console.log(response);
            $scope.weather = response.data;
        }, function (response) {
            console.log(response)
            $scope.weatherError = 'Martians must be interfering with the signal. Please come back later.';
        })
    }
    $scope.getWeather();
    $scope.getImages();
    
});