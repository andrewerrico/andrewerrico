angular.module('myApp')
  .config($routeProvider, function($routeProvider) {
    //$routeProvider

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
