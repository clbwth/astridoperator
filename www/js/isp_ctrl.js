/**
 * Created by Gabriele on 05/07/2016.
 */
angular.module('Astrid_Op')
  .controller('inspectionCtrl', ['$scope', function ($scope, $cordovaSQLite, $ionicPlatform)
  {
    $scope.showInspections = function ()
    {
      var query = "SELECT * FROM table_inspections WHERE is_inspected = ?";
      Astrid.executeSql(query, [0], function (data) {
        document.getElementById('db_result').innerHTML = JSON.stringify(data);
        console.log(data);
      });
    }
  }]);

