angular.module('myTube').factory('tubeService', function($http){
   var query = '?part=snippet&maxResults=20&q=angular&type=video&&key=AIzaSyA9Ye3j-HG23TvQSw27O_x-aFFQo07PBVM';
   var url = 'https://www.googleapis.com/youtube/v3/search' + query;
   
   var tubeService = {
       getVids: function() {
           return $http.get(url).then(function(response){
               return response.data;
           });
       }
   
       
   };
    return tubeService;
    
});