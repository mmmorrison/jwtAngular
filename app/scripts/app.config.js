'use strict';

angular.module('jwtAngularApp').config(function($stateProvider) {
  $stateProvider.state('register', {
    url: '/register',
    templateUrl: '/views/register.html',
  });
});
