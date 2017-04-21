console.log('users Factory');
myApp.factory('answersFactory', ['$http', function($http) {
  var factory = {}; //sets factory object

  factory.create = function(user, id, answer, callback) {
      var obj = {user: user, answer: answer.answer, details: answer.details}
      $http.post('/answer/'+id, obj).then(function(returned_data){
        console.log('this is the returned data', returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
  }
  factory.addlike = function(answer, callback){
    var obj = {id: answer._id}
    $http.post('/answerlike', obj).then(function(returned_data){
      console.log('this is the returned data', returned_data.data);
      if (typeof(callback) == 'function'){
        callback(returned_data.data);
      }
    });
  }





  return factory;
}]);
