/**
 * Created by Gabriele on 12/07/2016.
 */

angular.module('Astrid_Op')
  .controller('AreaController', ['$scope', function ($scope, $cordovaSQLite, $ionicPlatform)
  {
    $scope.area;
    $scope.comune;
    $scope.newArea = function ()
    {
      document.getElementById("newGame").style.visibility = "visible";      
      var query = "INSERT INTO table_inspections (ga_name, town_of, is_inspected) VALUES (?,?,?)";
      document.addEventListener("deviceready", function () {
        AstridDB.executeSql(query, [$scope.area, $scope.comune, 0], function (resultSet) {
          console.log('resultSet.insertId: ' + resultSet.insertId);
          console.log('resultSet.rowsAffected: ' + resultSet.rowsAffected);
        }, function (error) {
          console.log('SELECT error: ' + error.message);
        });
      });

    };
  }]);
