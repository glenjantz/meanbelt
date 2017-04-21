var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function ($routeProvider){
  $routeProvider

  .when('/', {
    templateUrl: 'partials/main.html',
    controller: 'newController'
  })

  .when('/dash',{
    templateUrl: 'partials/dash.html',
    controller: 'dashController'
  })

  .when('/question',{
    templateUrl: 'partials/question.html',
    controller: 'questionController'
  })
  .when('/answerq/:id',{
    templateUrl: 'partials/answer.html',
    controller: 'answerController'
  })
  .when('/showq/:id',{
    templateUrl: 'partials/showq.html',
    controller: 'answerController'
  })

  .otherwise({
    redirectTo: '/'
  });
});
