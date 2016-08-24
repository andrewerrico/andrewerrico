var app = angular.module('myApp', []);

app.controller('appController', function ($scope) {
  $scope.message = "My asdAPP..."
});





/*var myApp = angular.module('myApp', ['ngRoute']);


//configure routes
myApp.config(function($routeProvider) {
  $routeProvider

    // route for home
    .when('/', {
      templateUrl: 'assets/js/components/home/homeView.html',
      controller: 'homeControl'
    })

    // route for about
//    .when('/about', {
//      templateUrl: 'components/home/aboutView.html',
//      controller: 'homeControl'
//    })
})


myApp.controller('mainController', function($scope) {
  $scope.message = "My App...";
})
*/
/*
(function () {
  var home, routes;
  home = require('./components/home');
  routes = require('./routes');
  angular.module('simple', [
    'ngRoute',
    home.name
  ]).config(routes);
}());
*/
