angular.module("todoListApp", [])

.controller('mainCtrl', function($scope, dataService) {
  $scope.helloConsole = dataService.helloConsole;

  $scope.addTodo = function() {
    let todo = {name: "This is a new todo."};
    $scope.todos.push(todo);
  };

  $scope.deleteTodo = function(todo, $index) {
    dataService.deleteTodo(todo);
    $scope.todos.splice($index, 1);
  };

  $scope.saveTodo = function(todo) {
    dataService.saveTodo(todo);
  }

  dataService.getTodos(function(response) {
      console.log(response.data);
      $scope.todos = response.data;
  });
})
.service('dataService', function ($http) {
  this.helloConsole = function () {
    console.log('This is the hello console service!');
  };

  this.getTodos = function(callback) {
                    $http.get('mock/todos.json')
                    .then(callback);
  };

  this.deleteTodo = function(todo) {
    console.log("The todo " + todo.name + " is deleted!");
  };

  this.saveTodo = function(todo) {
    console.log("The todo " + todo.name + " is saved!");
  };
});
