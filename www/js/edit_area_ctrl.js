/**
 * Created by Gabriele on 18/07/2016.
 */
angular.module('Astrid_Op')
  .controller('EditAreaController', ['$scope', function ($scope, $cordovaSQLite, $ionicPlatform, $stateParams)
  {
    var id = $stateParams.id;
    $scope.area;
    $scope.loadArea();
    
    $scope.loadArea = function() {
      var query = "SELECT * FROM table_inspections WHERE id = ?";
      document.addEventListener("deviceready", function () {
        AstridDB.executeSql(query, [id], function (data) {
          $scope.area = data;
          console.log($scope.area);
        });
      })
    }
  }]);
