/**
 * Created by Gabriele on 05/07/2016.
 */
angular.module('Astrid_Op')
  .controller('inspectionCtrl', ['$scope', function ($scope, $cordovaSQLite, $ionicPlatform)
  {
    $scope.db_result = null;
    $scope.inspections = null;

    $scope.$watch('db_result', function()
    {
      //chiamare funzione esterna per assegnare valore db_result a inspections
      $scope.inspections = $scope.db_result;
      console.log($scope.inspections);
      console.log($scope.inspections.item(1).ga_name);
    });

    $scope.showInspections = function ()
    {
      console.log('Showinspection running');
      var query = "SELECT * FROM table_inspections WHERE is_inspected = ?";
        document.addEventListener("deviceready", function () {
          AstridDB.executeSql(query, [0], function (data) {
            $scope.db_result = data.rows;
            console.log(data.rows.item(1).ga_name);
            console.log($scope.db_result.item(2).ga_name);
          });
        });
      };
  }]);

