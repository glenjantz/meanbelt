
myApp.controller('editController', ['$scope','usersFactory', '$routeParams', '$location', function($scope, usersFactory, $routeParams, $location) {
//used to show one friend
  $scope.user = {};
  $scope.updatedUser = {};
  //automatically runs to show one specific user
   usersFactory.show($routeParams.id, function(returnedData){
     $scope.user = returnedData;
     $scope.user.bday = new Date(returnedData.bday);
     console.log('this is the edit index', $scope.user);
   });
//this line doesn't need to be defined


   //tells the factory to use this id to delete and then redirects after completion
   $scope.update = function(){
     console.log('coming from the edit controller', $scope.user)
     var thisone = $routeParams.id;
     console.log('this is the paramater', thisone);
     usersFactory.update($scope.user, thisone, function(data){
      //  $scope.updatedUser = {};
       $location.url('/')
    });
   }
}]);
