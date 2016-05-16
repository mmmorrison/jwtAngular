"use strict";

angular.module("jwtAngularApp").config(function($urlRouterProvider, $stateProvider, $authProvider) {

  $urlRouterProvider.otherwise("/");
  $stateProvider

  .state("main", {
    url: "/",
    templateUrl: "/views/main.html",
  })

  .state("register", {
    url: "/register",
    templateUrl: "/views/register.html",
    controller: "RegisterCtrl"
  });
});
