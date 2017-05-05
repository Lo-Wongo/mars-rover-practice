angular.module('marsApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

    $stateProvider
    .state('home',{
        url: '/',
        templateUrl: './app/routes/home/homeTemplate.html'
    })
    .state('curiosity',{
        url: '/curiosity',
        templateUrl: './app/routes/curiosity/curiosityTemplate.html'
    })
    .state('opportunity',{
        url: '/opportunity',
        template: "<h2>Opportunity</h2>"
    })
    .state('weather',{
        url: '/weather',
        template: '<h2> The current weather on mars:</h2>'
    });


    $urlRouterProvider.otherwise('/');
});