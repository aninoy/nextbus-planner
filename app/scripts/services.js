'use strict';
angular.module('NextbusPlanner.services', [])

/**
* A simple example service that returns some data.
*/
.factory('Favs', function() {
	// Might use a resource here that returns a JSON array
	// Some fake testing data
	var favs = [
		{ id: 0, name: 'Adi' },
		{ id: 1, name: 'Home' },
		{ id: 2, name: 'Work' }
	];

	return {
		all: function() {
			return favs;
		},
		get: function(favId) {
			// Simple index lookup
			return favs[favId];
		}
	};
});
