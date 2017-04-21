myApp.controller('answerController', ['$scope','usersFactory','questionsFactory','answersFactory', '$location','$routeParams', function($scope, usersFactory,questionsFactory,answersFactory, $location,$routeParams) {


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
  var getQuestion = function(){
    questionsFactory.show($routeParams.id, function(data){
      $scope.question = data;
    })
  }
  getQuestion()
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
$scope.submitanswer = function(){
  answersFactory.create($scope.currentuser.name, $routeParams.id, $scope.newAnswer, function(data){
    $location.url('/dash')
  })
}
$scope.addlike = function(answer){
  answersFactory.addlike(answer, function(data){
    getQuestion()
  })
}

}]);
