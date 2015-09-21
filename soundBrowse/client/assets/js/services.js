var app = angular.module('soundbrowse');






app.factory('soundService',function($http){ 
    var scloud = 'https://api.soundcloud.com/tracks?q=';
    var clientID = '&client_id=aab531089ec815de095787861b33116b';
    
    var soundService = {
        getSounds: function (search) { 
            var mySearch = scloud + search + clientID;
            return $http.get(mySearch).then(function(data){
            return data;
             });
        }
    };
   
    return soundService;
    
});