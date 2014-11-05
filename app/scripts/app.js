'use strict';
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('NextbusPlanner', ['ionic', 'config',
	'NextbusPlanner.controllers', 'NextbusPlanner.services'])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if(window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if(window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}
	});
})

.config(function($stateProvider, $urlRouterProvider) {

	// Ionic uses AngularUI Router which uses the concept of states
	// Learn more here: https://github.com/angular-ui/ui-router
	// Set up the various states which the app can be in.
	// Each state's controller can be found in controllers.js
	$stateProvider

		.state('tab', {
			url: '/tab',
			abstract: true,
			templateUrl: 'templates/tabs.html'
		})

		// Each tab has its own nav history stack:

		.state('tab.favs', {
			url: '/favs',
			views: {
				'tab-favs': {
					templateUrl: 'templates/tab-favs.html',
					controller: 'FavsCtrl'
				}
			}
		})

		.state('tab.fav-detail', {
			url: '/fav/:favId',
			views: {
				'tab-favs': {
					templateUrl: 'templates/fav-detail.html',
					controller: 'FavDetailCtrl'
				}
			}
		})

		.state('tab.add', {
			url: '/add',
			views: {
				'tab-add': {
					templateUrl: 'templates/tab-add.html',
					controller: 'AddCtrl'
				}
			}
		})

		.state('tab.search', {
			url: '/search',
			views: {
				'tab-search': {
					templateUrl: 'templates/tab-search.html',
					controller: 'SearchCtrl'
				}
			}
		});

	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/tab/favs');
});
