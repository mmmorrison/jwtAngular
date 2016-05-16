'use strict';

angular.module('jwtAngularApp')
	.controller('LogoutCtrl', function ($auth, $state) {
		$auth.logout();
		$state.go('main');
	});
