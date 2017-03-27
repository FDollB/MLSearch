var app = angular.module('MLSearchApp',[]);

app.controller("MainController", ['$scope', '$http', function($scope, $http) {

	$scope.Search = function(){
	$http.get('/api/items?q=' + $scope.searchInput).then(
	function(response) {
		console.log(response);
		$scope.items = response.data.items;
	}, 
	function(response) {
		console.log("Error " + response);
	});
}
}]);