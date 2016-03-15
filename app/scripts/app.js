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
    // 'ngAnimate',
    // 'ngCookies',
    // 'ngSanitize',
    // 'ngTouch',
    'ngResource',
    'ngRoute',
    'angular-toArrayFilter'
]);

myApp.config(['$resourceProvider', function($resourceProvider) {
    // Don't strip trailing slashes from calculated URLs
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

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
