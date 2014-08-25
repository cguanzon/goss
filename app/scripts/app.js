'use strict';

/**
 * @ngdoc overview
 * @name gossApp
 * @description
 * # gossApp
 *
 * Main module of the application.
 */
angular
  .module('gossApp', ['firebase', 'ui.router']).config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/main');

        $stateProvider.
            state('main',{
                url: '/main',
                templateUrl: '/views/main.html',
                controller: 'MainCtrl'

            });
    });
