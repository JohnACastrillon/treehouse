angular.module('foobar', []);
//ES6 fat arrow functions do not work in these exercises
angular.module('foobar').directive('customDirective', () => {
  return {
    template: console.log('This is a custom directive!')
  };
});
