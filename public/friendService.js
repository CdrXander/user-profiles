angular.module('userProfiles')
.service('friendService', function( $http ) {
  
    
    this.login = function( user ) {
       	var url = "http://localhost:1701/api/login";
       	return $http.post(url, user);
    };

    this.getFriends = function() {
    	var url = "http://localhost:1701/api/profiles";
    	return $http.get(url);
    };
});
