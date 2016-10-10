var ang = angular.module('portfolioApp');

ang.controller('workController',function($scope){
    
    var img1 = [];
    var link1 = ["http://codepen.io/Ajinkya009/full/qZyGRd/","http://codepen.io/Ajinkya009/full/xVmOVv/","http://codepen.io/Ajinkya009/full/BKMLvb/",
                "https://codepen.io/Ajinkya009/full/yJYMbw/","https://codepen.io/Ajinkya009/full/PzZMOj","http://codepen.io/Ajinkya009/full/rLLYPG/",
                "http://codepen.io/Ajinkya009/full/rLmbpB/","http://codepen.io/Ajinkya009/full/qNVApz/"];
    var title1 = ["Random quote generator","Local weather indicator","Wikipedia viewer","TwitchTv Streamers","JavaScript Calculator","Pomodoro clock",
                 "Tic tac toe A.I.","Simon Game"];

    for(var i=1;i<9;i++){
        img1.push("/../img/"+i+".jpg");
    }
    
    $scope.img1 = img1;
    $scope.link1 = link1;
    $scope.title1 = title1;
    
    var img2 = [];
    var link2 = ["https://timestamp-microservices.herokuapp.com/","https://req-header-parser-mservice.herokuapp.com/whoami",
                 "https://url-shortener-mservices.herokuapp.com/","https://file-metada-mservices.herokuapp.com/"];
    var title2 = ["Timestamp microservices","Header parser microservices",
                  "Url shortener microservices","File metadata microservices"];
    for(i=1;i<5;i++){
        img2.push("/../img/be_"+i+".jpg");
    }
    $scope.img2 = img2;
    $scope.link2 = link2;
    $scope.title2 = title2;
    
    
});