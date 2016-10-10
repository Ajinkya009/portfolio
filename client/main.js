(function(){
   
   var ang = angular.module('portfolio', []);
   
   ang.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
       
       $routeProvider
       .when('/home',{
           template:'/../template/home.html',
           controller:'homeController'
       });
       
   }]);
       
    
});