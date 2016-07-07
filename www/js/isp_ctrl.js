/**
 * Created by Gabriele on 05/07/2016.
 */
angular.module('Astrid_Op')
  .controller('inspectionCtrl', ['$scope', function ($scope, $cordovaSQLite, $ionicPlatform)
  {
    $scope.show_adder = false;

    $scope.toggleState = function ()
    {
      $scope.show_adder == true ? $scope.show_adder = false : $scope.show_adder = true;
    };

    $scope.new_area = function ()
    {
      
    }
  }]);

