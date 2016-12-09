angular.module('userProfiles')
.controller('profileCtrl', function( $scope, friendService ) {
	// FIX ME - assign values to $scope.currentUser and $scope.friends

	var reloadData  = function(response) {
		$scope.currentUser = response.data.currentUser;
		$scope.friends = response.data.friends;
	}


	friendService.getFriends().then(function(response) {
		reloadData(response);
	})

	friendService.getAllUsers().then(function(response) {
		$scope.persons = response.data;
	})


	$scope.addFriend = function(friendName) {
		friendService.addFriend(friendName).then(function(response){
			reloadData(response);
		})
	}

	$scope.removeFriend = function(friendName) {
		friendService.removeFriend(friendName).then(function(response){
			reloadData(response);
		})
	}


});