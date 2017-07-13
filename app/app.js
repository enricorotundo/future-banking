'use strict';


// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
    'ngResource',
    'ui.router',
    '720kb.datepicker'
])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state({
            name: 'view1',
            url: '/todos/',
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        }).state({
            name: 'view2',
            url: '/todos/?id',
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl'
        }).state({
            name: 'view3',
            url: '/todos/add/',
            templateUrl: 'view3/view3.html',
            controller: 'View3Ctrl'
        });

  $urlRouterProvider.otherwise('/todos/');
}])
.factory('todos', function($resource) {
        return $resource(
            'https://agile-thicket-76618.herokuapp.com/todos/:id/',
            //'http://localhost:8000/todos/:id/',
            {},
            {
                'query': {
                    method: 'GET',
                    isArray: false,
                    headers: {
                        'Content-Type':'application/json'
                    }
                },
                'create': {
                    method: 'POST',
                    headers: {
                        'Content-Type':'application/json'
                    }
                },
                'update': {
                    method: 'PUT',
                    headers: {
                        'Content-Type':'application/json'
                    }
                },
                'delete': {
                    method: 'DELETE',
                    headers: {
                        'Content-Type':'application/json'
                    }
                }
            },
            {
                stripTrailingSlashes: false
            }
        );
    });
