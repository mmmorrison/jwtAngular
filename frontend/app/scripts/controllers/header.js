'use strict';

angular.module('jwtAngularApp')
	.controller('HeaderCtrl', function ($scope, $auth) {
		$scope.isAuthenticated = $auth.isAuthenticated;
	});
