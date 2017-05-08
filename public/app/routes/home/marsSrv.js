angular.module('marsApp')
.service('marsSrv' , function($http){
    const baseURL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2017-5-4&api_key=';
    let url2 = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2017-5-3&api_key=';
    let key = 'bDTHnNfXlX9xa3CilBg85EbfUe4F2gNBx8EDnZHU'
    let weatherURL = 'https://marsweather.ingenology.com/v1/latest/';


    this.getImages = function (rover) {
        return $http({
            method: "GET",
            url: baseURL + key
        })
    }

    this.getWeather = function (){
        return $http({
            method: "GET",
            url: weatherURL
        })
    }

});