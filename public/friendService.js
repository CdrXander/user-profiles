angular.module('userProfiles')
.service('friendService', function( $http ) {
  
  	var port = 1701;
  	var appPath = "http://localhost:"+port+"/api";
    
    this.login = function( user ) {
       	var url = appPath + "/login";
       	return $http.post(url, user);
    };

    this.getFriends = function() {
    	var url = appPath + "/profiles";
    	return $http.get(url);
    };

    this.getAllUsers = function() {
    	var url = appPath + "/users";
    	return $http.get(url);
    }

    this.addFriend = function(friendName) {
    	var url = appPath + "/friend/add";
    	return $http.post(url, {friendName:friendName});
    }

    this.removeFriend = function(friendName) {
    	var url = appPath + "/friend/remove";
    	return $http.post(url, {friendName:friendName});
    }
});
