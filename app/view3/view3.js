'use strict';

app

.controller('View3Ctrl', ['$scope', 'todos', '$stateParams', '$state', function($scope, todos, $stateParams, $state) {

    // create stub item
    var entry = {
        owner: 1,
        status: "active",
        "due_date": null,
        "description": null
    };

    // pass the stub to the $scope
    $scope.todo = entry;

    // called by the "create item" button
    $scope.createTODO = function () {

        var new_todo = new todos($scope.todo);

        new_todo.$save(function (res) {
            // redirect to home
            $state.go('view1', {}, {reload: true});
        });

    };
}]);
