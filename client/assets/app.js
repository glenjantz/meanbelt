var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function ($routeProvider){
  $routeProvider
  //index partial #!/
  .when('/', {
    templateUrl: 'partials/main.html',
    controller: 'newController'
  })
  //create new user #!/new
  .when('/new',{
    templateUrl: 'partials/new.html',
    controller: 'newController'
  })
  //edit a user #!/edit/:id
  .when('/edit/:id',{
    templateUrl: 'partials/edit.html',
    controller: 'editController'
  })
  //show a single user #!/show/:id
  .when('/show/:id',{
    templateUrl: 'partials/show.html',
    controller: 'editController'
  })
  //redirect to index partial
  .otherwise({
    redirectTo: '/'
  });
});
