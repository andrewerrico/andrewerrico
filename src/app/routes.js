// configure our routes
myApp.config(function($routeProvider) {
  $routeProvider

  // route for the home page
  .when('/', {
    title : 'Home',
    templateUrl : 'app/pages/home.html',
    controller  : 'mainController',
  })

  // route for the about page
  .when('/about', {
    title: "About",
    templateUrl : 'app/pages/about.html',
    controller  : 'aboutController'
  })

  // route for the process page
  .when('/process', {
    title: "Process",
    templateUrl : 'app/pages/process.html',
    controller  : 'processController'
  })

  // route for the process page
  .when('/work', {
    title: "Work",
    templateUrl : 'app/pages/work.html',
    controller  : 'workController'
  })

  // route for the contact page
  .when('/contact', {
    title: "Contact",
    templateUrl : 'app/pages/contact.html',
    controller  : 'contactController'
  });
});
myApp.run(['$rootScope', function($rootScope) {
  $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
      $rootScope.title = current.$$route.title;
  });
}]);

/*
// I just discovered a nice way to set your page title
// if you're using routing:

// JavaScript:
var myApp = angular.module('myApp', ['ngResource'])
myApp.config(
  ['$routeProvider', function($routeProvider) {
      $routeProvider.when('/', {
          title: 'Home',
          templateUrl: '/Assets/Views/Home.html',
          controller: 'HomeController'
      });
      $routeProvider.when('/Product/:id', {
          title: 'Product',
          templateUrl: '/Assets/Views/Product.html',
          controller: 'ProductController'
      });
  }]);

myApp.run(['$rootScope', function($rootScope) {
  $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
      $rootScope.title = current.$$route.title;
  });
}]);

// HTML:
<!DOCTYPE html>
<html ng-app="myApp">
<head>
  <title ng-bind="'myApp &mdash; ' + title">myApp</title>
...

*/
