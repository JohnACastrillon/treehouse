angular.module("todoListApp", [])
  .controller('mainCtrl', ($scope) => {
    $scope.helloWorld = () => {
      console.log('Hello there! This is the helloWorld controller function, in the mainCtrl!');
    }
  });
