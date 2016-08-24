// script.js
// create the module and name it scotchApp
// also include ngRoute for all our routing needs
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'app/pages/home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'app/pages/about.html',
            controller  : 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'app/pages/contact.html',
            controller  : 'contactController'
        });
});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

scotchApp.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

scotchApp.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});

scotchApp.run(['$rootScope', '$menu', function($rootScope, $menu) {
    $rootScope.$menu = $menu;
  }])
  .provider("$menu", function(){
    this.$get = [function(){
      var menu = {};
      var body = document.getElementsByTagName('body')[0];

      menu.show = function show(){
        var menu = angular.element(body);
        menu.addClass('menu-open');
      };

      menu.hide = function hide(){
        var menu = angular.element(body);
        menu.removeClass('menu-open');
      };

      menu.toggle = function toggle() {
        var menu = angular.element(body);
        menu.toggleClass('menu-open');
      };
      return menu;
    }];
  });
