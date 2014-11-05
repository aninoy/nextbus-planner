'use strict';
angular.module('NextbusPlanner.controllers', [])

.controller('FavsCtrl', function($scope, Favs) {
	$scope.favs = Favs.all();
})

.controller('FavDetailCtrl', function($scope, $stateParams, Favs) {
	$scope.fav = Favs.get($stateParams.favId);
})

.controller('AddCtrl', function($scope) {
	$scope.item = 'Item Search';
})

.controller('SearchCtrl', function($scope) {
	$scope.item = 'Item Search';
});
