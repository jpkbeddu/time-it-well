'use strict';

angular.module('myApp', [
    'ngRoute',
    'ngResource',
    'ngMaterial'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            Controller: 'NotesController',
            templateUrl: 'partials/notes.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
