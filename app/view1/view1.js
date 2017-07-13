'use strict';

app

.controller('View1Ctrl', ['$scope', 'todos', '$stateParams', '$state', function($scope, todos, $stateParams, $state) {

    // GET all the TODO items
    todos.query().$promise.then(function(data) {
        $scope.todos = data;
    });

}]);
