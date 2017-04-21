console.log('users Factory');
myApp.factory('usersFactory', ['$http', function($http) {
  var factory = {}; 

  factory.user;

  factory.createuser = function(user, callback){
    factory.user = user;
    callback(factory.user);
  }

  factory.getUser = function(callback){
    if (typeof(callback) == 'function'){
      callback(factory.user);
    }
  }

  factory.logout = function(callback){
    factory.user = {}
    if (typeof(callback) == 'function'){
      callback(factory.user);
    }
  }
  return factory;
}]);
