angular.module('userProfiles')
.controller('profileCtrl', function( $scope, friendService ) {
	// FIX ME - assign values to $scope.currentUser and $scope.friends


	friendService.getFriends().then(function(response) {
		$scope.currentUser = response.data.currentUser;
		$scope.friends = response.data.friends;
	})

	// $scope.login(user) {
	// 	friendService.login(user).then(function(response) {
	// 		if(response.status == 200) {
				
	// 		} else {
	// 			$scope.currentUser = {name:"INCORRECT USER"};
	// 			$scope.friends = [];
	// 		}
	// 	});
	// }
});