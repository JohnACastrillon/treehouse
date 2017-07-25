angular.module("todoListApp", [])

.controller('mainCtrl', function($scope, dataService) {
  $scope.helloConsole = dataService.helloConsole;

  $scope.helloWorld = function() {
    console.log("Hello there! This the helloWorld controller function, in the mainCtrl!");
  };

  $scope.todos = [
    {'name': 'clean the house'},
    {'name': 'water the dog'},
    {'name': 'feed the lawn'},
    {'name': 'pay dem bills'},
    {'name': 'run'},
    {'name': 'swim'}
  ];

  $scope.learningNgChange = function() {
    console.log("An input changed");
  };
})
.service('dataService', function () {
  this.helloConsole = function () {
    console.log('This is the hello console service!');
  }
});
