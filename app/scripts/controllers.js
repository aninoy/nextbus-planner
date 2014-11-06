'use strict';
angular.module('NextbusPlanner.controllers', [])

.controller('FavsCtrl', function($scope, Favs) {
	$scope.favs = Favs.all();
})

.controller('FavDetailCtrl', function($scope, $http, $stateParams, Favs) {
	$scope.fav = Favs.get($stateParams.favId);
	$http.get('http://webservices.nextbus.com/service/publicXMLFeed?command=predictionsForMultiStops&a=sf-muni&stops=N|6997&stops=N|3909');

})

.controller('AddCtrl', function($scope, $http) {
	$scope.fav = {
		name: '',
		zipCode: '',
		state: ''
	};

	// $scope.agencies = [];

	$scope.getState = function () {
		$http.get('http://zip.getziptastic.com/v2/US/'+$scope.fav.zipCode)
			.success(function (data) {
				console.log(data);
				$scope.state = data.state;
				$scope.getAgencies(data.state);
			}).error(function (data) {
				console.log(data);
			});
	};

	$scope.getAgencies = function (state) {
		$http.get('http://webservices.nextbus.com/service/publicXMLFeed?command=agencyList')
			.success(function (data) {
				console.log(state);
				console.log('Converting to JSON...');
				var jsonData = xmlToJSON.parseString(data);
				console.log(jsonData.body[0].agency[0]);
				$scope.agencies = jsonData.body[0].agency;

			}).error(function (data) {
				console.log(data);
			});
	};


})

.controller('SearchCtrl', function($scope) {
	$scope.item = 'Item Search';
});
