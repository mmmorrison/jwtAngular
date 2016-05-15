'use strict';

angular.module('jwtAngularApp').controller('RegisterCtrl', function ($scope) {
	$scope.submit = function () {
		$auth.signup({
			email: $scope.email,
			password: $scope.password
		})
	};
});
