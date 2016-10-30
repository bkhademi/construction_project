'use strict';

/**
 * @ngdoc overview
 * @name constructionProjectApp
 * @description
 * # constructionProjectApp
 *
 * Main module of the application.
 */
angular
  .module('constructionProjectApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'satellizer',
    'toaster',
    'ngStorage'
  ])
  .config(function ($routeProvider, $authProvider, APIURL) {
    $authProvider.baseUrl = APIURL;

    $authProvider.facebook({
      clientId: 1130731376962597,
      // by default, the redirect URI is http://localhost:5000
      redirectUri: 'http://localhost:8080/index.html'
    });

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/design', {
        templateUrl: 'views/design.html',
        controller: 'DesignCtrl',
        controllerAs: 'design'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(function($rootScope){
    $rootScope.$on('$stateChangeStart',
    function (event, toState) {
      var requiredLogin = false;
      // check if this state need login
      if (toState.data && toState.data.requiredLogin){
        requiredLogin = true;
      }
      
      // if yes and if this user is not logged in, redirect him to login page
      // if (requiredLogin && !$auth.isAuthenticated()) {
      //   event.preventDefault();
      //   $location.path('login');
      // }
    });
  })

  ;
