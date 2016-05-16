'use strict';

/**
 * @ngdoc service
 * @name jwtAngularApp.authToken
 * @description
 * # authToken
 * Factory in the jwtAngularApp.
 */
angular.module('jwtAngularApp')
  .factory('authToken', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
