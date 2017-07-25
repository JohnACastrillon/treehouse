angular.module("todoListApp", [])

.controller('mainCtrl', function($scope, dataService) {
  $scope.helloConsole = dataService.helloConsole;

  $scope.helloWorld = function() {
    console.log("Hello there! This the helloWorld controller function, in the mainCtrl!");
  };

  $scope.learningNgChange = function() {
    console.log("An input changed");
  };
})
.service('dataService', function ($http) {
  this.helloConsole = function () {
    console.log('This is the hello console service!');
  }

  this.getTodos = $http.get('mock/todos.json')
                      .then(function (res) {
                        console.log(res.data);
                        return res.data;
                      })
});
