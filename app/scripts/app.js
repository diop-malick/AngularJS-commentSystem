'use strict';

/**
 * @ngdoc overview
 * @name tutoGrafikartPostCommentApp
 * @description
 * # tutoGrafikartPostCommentApp
 *
 * Main module of the application.
 */
var myApp = angular.module('tutoGrafikartPostCommentApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

// route config
myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/', {
            templateUrl: 'views/home.html',
            controller: 'PostsCtrl'
        })
        .when('/comments/:id', {
            templateUrl: 'views/comments.html',
            controller: 'CommentsCtrl'
        })
        .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
