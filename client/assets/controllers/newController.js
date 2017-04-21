myApp.controller('newController', ['$scope','usersFactory', '$location', function($scope, usersFactory, $location) {

  $scope.createuser = function() {
      usersFactory.createuser($scope.NewUser, function(data) {
        $scope.user = data;
        $location.url('/dash')  //redirect to main page
      });
  }

}]);
