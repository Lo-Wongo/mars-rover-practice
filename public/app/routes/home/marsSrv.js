angular.module('marsApp')
.service('marsSrv' , function($http){
    let baseURL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=';
    let key = 'bDTHnNfXlX9xa3CilBg85EbfUe4F2gNBx8EDnZHU'


    this.getImages = function (rover) {
        return $http({
            method: "GET",
            url: baseURL + key
        })
    }

});