angular.module('marsApp')
.controller('marsCtrl' , function($scope, marsSrv){
    $scope.x = ['Kyle','Britta','Cami','Madison'];


    $scope.getImages = function () {
        marsSrv.getImages().then(function (response) {
            console.log(response.data.photos);
            $scope.photos = response.data.photos;
        })
    };


    $scope.getImages();
    
});