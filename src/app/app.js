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
