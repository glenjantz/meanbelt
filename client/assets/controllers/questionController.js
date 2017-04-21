myApp.controller('questionController', ['$scope','usersFactory','questionsFactory', '$location', function($scope, usersFactory,questionsFactory, $location) {


  var getUser = function (){
    usersFactory.getUser(function(data){
      if(data == undefined){
        $location.url('/')
      }else{
        $scope.currentuser = data;
      }
    })
  }
  getUser();
  $scope.logout = function(){
  usersFactory.logout(function(data){
    $scope.currentuser = data;
    $location.url('/')
  })
}
$scope.home = function(){
  $location.url('/dash')
}
$scope.addQuestion = function(){
  questionsFactory.create($scope.newQuestion, function(data){
    $location.url('/dash')
  })
}
}]);
