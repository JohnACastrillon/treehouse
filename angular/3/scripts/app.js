angular.module("todoListApp", [])
  .controller('mainCtrl', ($scope) => {
    $scope.helloWorld = () => {
      console.log('Hello there! This is the helloWorld controller function, in the mainCtrl!');
    };
  })
  .controller('coolCtrl', ($scope) => {
    $scope.whoAmI = () => {
      console.log('Hello there, this is the coolCtrl function!');
    };
    $scope.helloWorld = () => {
      console.log('Hello there! This is the other helloWorld function!');
    };
  })
  .controller('imASibling', ($scope) => {
    $scope.fooBar = 1234;
  });
