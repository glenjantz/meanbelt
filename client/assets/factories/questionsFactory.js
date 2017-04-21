console.log('users Factory');
myApp.factory('questionsFactory', ['$http', function($http) {
  var factory = {}; //sets factory object

  var questions = [];
  factory.create = function(question, callback) {
      var obj = {question: question.question, description: question.description}
      $http.post('/question', obj).then(function(returned_data){
        console.log('this is the returned data', returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
  }
  factory.qindex = function(callback){
    $http.get('/questions').then(function(returned_data){
      console.log('this is the returned data from the q index', returned_data)
      questions = returned_data.data
      if (typeof(callback) == 'function'){
        callback(questions);
      }
    })
  }
  factory.show = function(id, callback) {
    $http.get('/questions/'+id).then(function(returned_data){
      if (typeof(callback) == 'function'){
        callback(returned_data.data);
      }
    });
}




  return factory;
}]);
