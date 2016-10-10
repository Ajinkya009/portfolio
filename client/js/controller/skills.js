var ang = angular.module('portfolioApp');

ang.controller('skillsController',function(){
      var ctx = document.getElementById("myChart").getContext("2d");
      Chart.defaults.global.showTooltips = false;
      Chart.defaults.global.defaultFontColor = '#FFF';
      var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: ['HTML5/CSS3','JavaScript','NodeJs','ExpressJs','MongoDB','AngularJs','C'],
              datasets: [{
                  label:"",
                  data: ["50","75","60","60","65","60","80"],
                  backgroundColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(225, 92, 92, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)',
                      'rgba(225, 56, 56, 1)'
                  ],
                  borderColor: [
                      'rgba(255,99,132,1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(225, 92, 92, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)',
                      'rgba(225, 56, 56, 1)'
                  ],
                  borderWidth: 1,
              }]
          },
          options: {
              legend: {
                  display: false
              },
              tooltips:{
                  enabled:false
              },
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: true,
                          stepSize: 25,
                          max:100,
                          userCallback: function(value, index, values) {
                                switch(value){
                                    case 0: value= 'Rookie';
                                    
                                    break;
                                
                                    case 25: value='Jim Gordon';
                                    break;
                                    
                                    case 50: value='Robin';
                                    break;
                                    
                                    case 75: value='Joker';
                                    break;
                                    
                                    case 100: value='The Dark Knight';
                                    break;
                                    
                                }
                                return value;
                                },
                            responsive:true,
                            scaleFontColor: 'white'
                      }
                  }]
              }
          }
      }); 
      
});