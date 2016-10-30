'use strict';

/**
 * @ngdoc function
 * @name constructionProjectApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the constructionProjectApp
 */
angular.module('constructionProjectApp')
  .controller('LoginCtrl', function ($auth, toaster, $location) {
    var LoginCtrl = this;
    LoginCtrl.signUp = function () {
      $auth
      .signup({email: LoginCtrl.email, password: LoginCtrl.password})
      .then(function (response) {
        // set the token received from server
        $auth.setToken(response);
        // go to home
        $location.path('/home');
      })
      .catch(function (response) {
        console.log('error response', response);
      });
    };

    LoginCtrl.login = function () {
      $auth
      .login({email: LoginCtrl.email, password: LoginCtrl.password})
      .then(function (response) {
        $auth.setToken(response);
        $location.path('/home');
      })
      .catch(function () {
        console.log('Email or password not correct!');
        toaster.error(
          'ERROR','Email or password not correct!'
          );
      });
    };

    LoginCtrl.auth = function (provider) {
      $auth.authenticate(provider)
      .then(function (response) {
        console.debug('success', response);
        $location.path('/home');
      })
      .catch(function (response) {
        console.debug('catch', response);
      });
  };
  });
