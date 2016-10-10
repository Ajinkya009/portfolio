(function(){
   
   var ang = angular.module("portfolioApp",['ngRoute']);
   
   ang.config(['$routeProvider',function($routeProvider){
       
       $routeProvider
       .when('/',{
           templateUrl:'/../template/home.html'
       })
       .when("/skills",{
           templateUrl:'/../template/skills.html',
           controller:'skillsController'
       })
        .when("/work",{
           templateUrl:'/../template/work.html',
           controller:'workController'
       })
       .when("/contact",{
           templateUrl:'/../template/contact.html',
           controller:'contactController'
       })
       .otherwise({
           redirectTo:'/'
       });
       
   }]);
       
    
})();