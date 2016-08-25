// script.js
// create the module and name it myApp
// also include ngRoute for all our routing needs
var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate']);

// create the controller and inject Angular's $scope
myApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
    $scope.pageClass = 'page-home';
});

myApp.controller('aboutController', function($scope) {
    var currentTime = new Date();
    var dob = 1988;

    $scope.message = 'Look! I am an about page.';
    $scope.age = currentTime.getFullYear() - dob;
    $scope.pageClass = 'page-about';
});

myApp.controller('processController', function($scope) {
    $scope.message = 'This is my process.';
    $scope.pageClass = 'page-process';
});

myApp.controller('workController', function($scope) {
    $scope.message = 'Some of my projects.';
    $scope.pageClass = 'page-work';
});

myApp.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
    $scope.pageClass = 'page-contact';
});

myApp.controller('contactFormController', function($scope){
  // $scope.master = {};
  //
  // $scope.update = function(user) {
  //   $scope.master = angular.copy(user);
  // };
  //
  // $scope.reset = function() {
  //   $scope.user = angular.copy($scope.master);
  // }
  //
  // $scope.reset();
  //
  $scope.user = {
    firstName: 'this',
    lastName: 'this',
    subject: 'this',
    email: 'aserrico@gmail.com',
    message: ''
  };

});

myApp.run(['$rootScope', '$menu', function($rootScope, $menu) {
    $rootScope.$menu = $menu;
  }])
  .provider("$menu", function(){
    this.$get = [function(){
      var menu = {};
      var body = document.getElementsByTagName('body')[0];

      menu.show = function show(){
        var menu = angular.element(body);
        menu.addClass('nav-open');
      };

      menu.hide = function hide(){
        var menu = angular.element(body);
        menu.removeClass('nav-open');
      };

      menu.toggle = function toggle() {
        var menu = angular.element(body);
        menu.toggleClass('nav-open');
      };
      return menu;
    }];
  });

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
