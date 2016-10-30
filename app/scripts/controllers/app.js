'use strict';

/**
 * @ngdoc function
 * @name constructionProjectApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the constructionProjectApp
 */
angular.module('constructionProjectApp')
  .controller('AppCtrl', function ($auth, $localStorage, $location) {
    var AppCtrl = this;
    AppCtrl.isAuthenticated = function() {
      var is = $auth.isAuthenticated();
      return is;

    };
    AppCtrl.$storage = $localStorage;
    AppCtrl.logout = function(){
      if (!$auth.isAuthenticated()) { return; }
      $auth.logout()
        .then(function() {
          $location.path('/');
      });
    };
  });
