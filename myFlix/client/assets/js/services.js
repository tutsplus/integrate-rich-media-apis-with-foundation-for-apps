var app =  angular.module('myFlix');

app.factory('picService',function($http){
     var base_url = "https://api.instagram.com/v1/tags/";
     var token = "/media/recent?access_token=2155450794.3b95397.d851190cce4845a1a2bbbf53ce607c35&callback=JSON_CALLBACK";
     
     
     var picService = {
        getPicsTag: function (tag) { 
           var request = base_url + tag + token; 
           return $http.jsonp(request).then(function(response){
            return response.data;
             }); 
            
        }
         
         
         
     };
         
    return picService;
    
    
});

app.factory('searchService',function(){
    var SRCH = 'cats';
    
    var searchService = {
        setSearch: function (str) {
            SRCH = str;
        },
        getSearch: function(){
            return SRCH;  
        }
        
    };
    
    
    return searchService;
});   

































