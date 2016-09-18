(function () {
  'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){

    $scope.message = "";
    $scope.items = "";    

    $scope.calculate = function(){
      $scope.message = calculateItem($scope.items);
    };

    function calculateItem(string){
      var total = string.split(',');
      var text = "";

      if(string == ""){
        return "Please enter data first";
      } else {
        var x = 0;
        for (var a in total) {
          x += 1;
        }
        if(x >= 1 && x <= 3){
          text = "Enjoy!"
        }else if (x >= 4) {
          text = "Too much!";
        }
      }
      return text;
    };
  };

})();
