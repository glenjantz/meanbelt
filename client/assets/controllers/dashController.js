myApp.controller('dashController', ['$scope','usersFactory','questionsFactory', '$location', function($scope, usersFactory,questionsFactory, $location) {
  $scope.questions = [];

  var qindex = function(){
    questionsFactory.qindex(function(data){
      $scope.questions = data;
      console.log('these are the questions', $scope.questions)
    })
  }
  qindex()
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

}]);
