angular.module('todoListApp')
  .directive('helloWorld', () => {
    return {
      template: 'This is the hello world directive!',
      //Restricts the template to only be used as an element and not an element attribute
      restrict: 'E'
    };
  });
