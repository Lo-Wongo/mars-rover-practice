'use strict';

angular.module('marsApp', ['ui.router']).config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
        url: '/',
        templateUrl: './app/routes/home/homeTemplate.html'
    }).state('curiosity', {
        url: '/curiosity',
        templateUrl: './app/routes/curiosity/curiosityTemplate.html'
    }).state('opportunity', {
        url: '/opportunity',
        templateUrl: './app/routes/opportunity/opportunityTemplate.html'
    }).state('weather', {
        url: '/weather',
        templateUrl: './app/routes/weather/weatherTemplate.html'
    });

    $urlRouterProvider.otherwise('/');
}]);
'use strict';

angular.module('marsApp').directive('headerDir', function () {
    return {
        restrict: "E",
        templateUrl: './app/routes/header/headerTemplate.html'
    };
});
'use strict';

angular.module('marsApp').controller('marsCtrl', ["$scope", "marsSrv", function ($scope, marsSrv) {

    $scope.getCuriosty = function () {
        marsSrv.getImages('curiosity').then(function (response) {
            console.log(response.data.photos);
            $scope.photos = response.data.photos;
        }, function (response) {
            console.log(response);
            $scope.imageError = 'Martians must be interfering with the signal. Please come back later.';
        });
    };

    $scope.getOpportunity = function () {
        marsSrv.getImages('opportunity').then(function (response) {
            console.log(response.data.photos);
            $scope.opportunity = response.data.photos;
        }, function (response) {
            console.log(response);
            $scope.opportunityError = 'Martians must be interfering with the signal. Please come back later.';
        });
    };

    $scope.getWeather = function () {
        marsSrv.getWeather().then(function (response) {
            console.log(response);
            $scope.weather = response.data;
        }, function (response) {
            console.log(response);
            $scope.weatherError = 'Martians must be interfering with the signal. Please come back later.';
        });
    };
    $scope.getWeather();
    $scope.getCuriosty();
    $scope.getOpportunity();
}]);
'use strict';

angular.module('marsApp').directive('marsDir', function () {
    return {
        restrict: 'E',
        template: '<input type="text">'
    };
});
'use strict';

angular.module('marsApp').service('marsSrv', ["$http", function ($http) {
    // const baseURL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2017-5-4&api_key=';
    var baseURL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/';
    var endURL = '/photos?earth_date=2017-5-4&api_key=';
    // let url2 = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-5-3&api_key=';
    var key = 'bDTHnNfXlX9xa3CilBg85EbfUe4F2gNBx8EDnZHU';
    var weatherURL = 'http://marsweather.ingenology.com/v1/latest/';

    this.getImages = function (rover) {
        return $http({
            method: "GET",
            url: baseURL + rover + endURL + key
        });
    };

    this.getWeather = function () {
        return $http({
            method: "GET",
            url: weatherURL
        });
    };
}]);