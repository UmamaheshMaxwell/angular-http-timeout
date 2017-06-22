var app = angular.module("myApp", []);

app.controller("myController", ["$scope", "$http", function($scope, $http){
	
	var apiUrl = "https://jsonplaceholder.typicode.com/users"
	
	$scope.httpCall = function(){
		console.log("httpCall ====>")
		$http
			.get(apiUrl)
			.then(function(response){
				$scope.users = response.data
			})
	}
	
	$scope.httpTimeoutCall = function(){
		console.log("httpTimeoutCall  ====>")
		$http
			.get(apiUrl, {timeout: 100})
			.then(function(response){
				$scope.users = response.data
			})
	}	
}])