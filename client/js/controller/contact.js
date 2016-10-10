var ang = angular.module('portfolioApp');

ang.controller('contactController',function($scope,$http,$location){
    $scope.submitForm = function(name,email,message){
        var body = new Object({"name":name,"email":email,"message":message});
        
        $http.post('/submit',body).success(function(data){
            console.log(data);
            $scope.name="";
            $scope.email="";
            $scope.message="";
        });
        
    };
});