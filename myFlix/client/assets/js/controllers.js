app.controller('homeController', function($scope, $state, searchService){
    $scope.srch;
    
    $scope.getPix = function(set){
        searchService.setSearch(set);
         $state.reload('home');
    
        
    };

    
});


app.controller('searchController', function($scope, picService, $state,searchService ){
    $scope.pix = [];
    $scope.search = searchService.getSearch();
    $scope.myData = picService.getPicsTag($scope.search).then(function(data){
        $scope.pix = data.data;
    });
    
});
 