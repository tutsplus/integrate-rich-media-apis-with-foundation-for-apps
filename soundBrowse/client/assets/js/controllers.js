app.controller('favController', function($scope, soundService, $sce){
    
    $scope.soundList = soundService.getSounds('opera').then(function(data){
        var mySounds =[];
        var rawData = data;
        for (var i = rawData.data.length - 1 ; i >= 0 ; i--) {
            var smallPic = '';
            var iD = '?client_id=aab531089ec815de095787861b33116b';
            var sID = rawData.data[i].stream_url;
            var stream = sID + iD;
            
            if (rawData.data[i].artwork_url) {
                var tmpPic = rawData.data[i].artwork_url;
                smallPic = tmpPic.replace('large.jpg', 'mini.jpg');
                
                
            }else {
                
                smallPic = rawData.data[i].waveform_url;
                }
            
            mySounds.push({
              title: rawData.data[i].title,
              user: rawData.data[i].user.username,
              stream: $sce.trustAsResourceUrl(stream),
              pic: smallPic
              
            });   
        }
        $scope.sounds = mySounds;
        console.log(mySounds);
    });
});
    
    
    
app.controller('searchController', function($scope, soundService, $sce){
    $scope.search1;
    $scope.soundList = function (find){
        soundService.getSounds(find).then(function(data){
        var mySounds =[];
        var rawData = data;
        for (var i = rawData.data.length -1 ; i >= 0 ; i--) {
            var smallPic = '';
            var iD = '?client_id=aab531089ec815de095787861b33116b';
            var sID = rawData.data[i].stream_url;
            var stream = sID + iD;
            
            if (rawData.data[i].artwork_url) {
                var tmpPic = rawData.data[i].artwork_url;
                smallPic = tmpPic.replace('large.jpg', 'mini.jpg');
            
                
            }else {
                
                smallPic = rawData.data[i].waveform_url;
                }
                
            mySounds.push({
                    title: rawData.data[i].title,
                    user: rawData.data[i].user.username,
                    stream: $sce.trustAsResourceUrl(stream),
                    pic: smallPic
                    
            }); 
    
        }
        
        $scope.sounds = mySounds;
        console.log($scope.sounds);
        
        });
    };
});   