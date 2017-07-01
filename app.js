var app = angular.module("myApp", []);

app.config(function($httpProvider) { 
	$httpProvider.interceptors.push('timeoutHttpIntercept');  
});

app.factory('timeoutHttpIntercept', function() {
    return {
	      'request': function(config) {
	        config.timeout =  100; 
			//config.timeout = 1 * 60 * 1000; // 1 minute or 60 seconds or 60,000 milliseconds
	       return config; 
   		} 
    }; 
});

app.controller("myController", ["$scope", "$http", function($scope, $http){
	
	var apiUrl = "https://jsonplaceholder.typicode.com/users"
	
	$scope.httpCall = function(){
		console.log("httpCall ====>")
		$http
			.get(apiUrl)
			.then(function(response){
				$scope.users = response.data
			})
			.catch(function(response){
				console.log(response)
			})
	}
}])