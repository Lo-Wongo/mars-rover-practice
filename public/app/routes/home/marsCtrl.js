angular.module('marsApp')
.controller('marsCtrl' , function($scope, marsSrv){

    $scope.getCuriosty = function () {
        marsSrv.getImages('curiosity').then(function (response) {
            console.log(response.data.photos);
            $scope.photos = response.data.photos;
        }, function (response) {
            console.log(response)
            $scope.imageError = 'Martians must be interfering with the signal. Please come back later.';
        })
    };

    $scope.getOpportunity = function () {
        marsSrv.getImages('opportunity').then(function (response) {
            console.log(response.data.photos);
            $scope.opportunity = response.data.photos;
        }, function (response) {
            console.log(response)
            $scope.opportunityError = 'Martians must be interfering with the signal. Please come back later.';
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
    $scope.getCuriosty();
    $scope.getOpportunity();
    
});