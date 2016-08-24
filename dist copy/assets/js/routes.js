/**
 * Load states for application
 * more info on UI-Router states can be found at
 * https://github.com/angular-ui/ui-router/wiki
 */
angular.module('angularstrapApp')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    // any unknown URLS go to 404
    $urlRouterProvider.otherwise('/404');
    // no route goes to index
    $urlRouterProvider.when('', '/');
    // use a state provider for routing

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/templates/home/homeView.html',
            controller: "homeController",
            controllerAs: 'ctrl'
        })
        .state('404', {
            url: '/404',
            templateUrl: 'app/shared/404.html'
        });
}]);

/*
angular.module('myApp').config([
  '$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'components/home/homeView.html',
      action: 'DashboardApp.DashboardCtrl'
    })
  }
]);
*/
module.exports = function ($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'app/components/home/homeView.html',
    controller: 'homeControl'
  }).otherwise({ redirectTo: '/' });
  return $locationProvider.html5Mode(true);
};
