'use strict';

app

    .controller('View2Ctrl', ['$scope', 'todos', '$stateParams', '$state', function($scope, todos, $stateParams, $state) {

        // save the id of the TODO item
        var id = $stateParams.id;

        // execute the GET and pass it to the $scope
        var todo = todos.get({ id: id }, function(data) {
            $scope.todo = data;
        });

        // called by the "update button" button
        $scope.submitTODO = function () {
            todos.update({ id: id }, todo);
        };

        // called by the "delete item" button
        $scope.deleteTODO = function () {
            todos.delete({ id: id },
                function (successResult) {
                    // redirect to home
                    $state.go('view1', {}, {reload: true});
                }, function (errorResult) {

                });
        };

    }]);
