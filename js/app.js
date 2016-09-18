(function () {
  'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.name = "Stainley";

    $scope.upper = function(){
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    };

    $scope.message = "";

    $scope.sayHello = function(){
      $scope.message = "I like to Eaet";
      return "I like to Eat";
    };

  };


})();
