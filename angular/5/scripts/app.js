angular.module("todoListApp", [])

.controller('mainCtrl', function($scope, dataService) {
  $scope.helloConsole = dataService.helloConsole;

  $scope.helloWorld = function() {
    console.log("Hello there! This the helloWorld controller function, in the mainCtrl!");
  };

  $scope.learningNgChange = function() {
    console.log("An input changed");
  };

  dataService.getTodos(function(response) {
      console.log(response.data);
      $scope.todos = response.data;
  });
})
.service('dataService', function ($http) {
  this.helloConsole = function () {
    console.log('This is the hello console service!');
  }

  this.getTodos = function(callback) {
                    $http.get('mock/todos.json')
                    .then(callback);
  }

  this.deleteTodo = function(todo) {
    console.log("The todo " + todo.name + " is deleted!");
  }

  this.saveTodo = function(todo) {
    console.log("The todo " + todo.name + " is saved!");
  }
});
