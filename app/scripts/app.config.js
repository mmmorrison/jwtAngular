angular.module('jwtAngularApp').config(function($stateProvider) {
  $stateProvider.state('register', {
    url: '/register',
    template: '/views/register.html'
  })
})
