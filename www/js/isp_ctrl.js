/**
 * Created by Gabriele on 05/07/2016.
 */
angular.module('Astrid_Op')
  .controller('inspectionCtrl', ['$scope', function ($scope, $cordovaSQLite, $ionicPlatform)
  {
    $scope.newArea = function ()
    {
      document.getElementById("newGame").style.visibility = "visible";
      console.log('ciao');
      var query = "INSERT INTO table_inspections (ga_name, town_of, is_inspected) VALUES (?,?,?,?)";
      document.addEventListener("deviceready", function () {
        AstridDB.executeSql(query, [$scope.area, $scope.comune, 0], function (resultSet) {
          console.log('resultSet.insertId: ' + resultSet.insertId);
          console.log('resultSet.rowsAffected: ' + resultSet.rowsAffected);
          $scope.show_adder == true ? $scope.show_adder = false : $scope.show_adder = true;
        }, function (error) {
          console.log('SELECT error: ' + error.message);
        });
      });

    };

  }]);

