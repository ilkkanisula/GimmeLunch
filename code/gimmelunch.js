function LunchList($scope, $http) {

    $http.get('http://lunch.leino.net/lunches.json').success(function(data) {
        $scope.lunches = data;
    });

    $scope.predicate = 'restaurant';

}


