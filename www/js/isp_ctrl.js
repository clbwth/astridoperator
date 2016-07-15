/**
 * Created by Gabriele on 05/07/2016.
 */
angular.module('Astrid_Op')

.controller('inspectionCtrl', ['$scope', function ($scope, $cordovaSQLite, $ionicPlatform)
{
  $scope.db_result    = null;
  $scope.inspections  = null;
  $scope.areas        = [];

  /**
   * Fetches the records from the db
   * Then stores the records in the $scope.db_result model
   */
  $scope.fetchInspections = function ()
  {
    var query = "SELECT * FROM table_inspections WHERE is_inspected = ?";
    document.addEventListener("deviceready", function () {
      AstridDB.executeSql(query, [0], function (data) {
        $scope.db_result = data;
        $scope.logAreas();
      });
    });
  };

  //  Init the records
  $scope.fetchInspections();

  $scope.logAreas = function() {
    console.log('Starting compose array meth');
    $scope.composeArray();
    console.log($scope.areas);
  };

  //  Compose the array
  $scope.composeArray = function() {
    for(var i = 0; i < $scope.db_result.rows.length; i++)
    {
      $scope.areas[i] = $scope.db_result.rows.item(i);
    }

    console.log('Ended exec of compose array meth');
  };
}]);


