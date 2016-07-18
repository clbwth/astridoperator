/**
 * Created by Gabriele on 05/07/2016.
 */
angular.module('Astrid_Op')
  .config(function($stateProvider, $urlRouterProvider)
  {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('index',{
        url: '/',
        templateUrl: 'views/asst_main.html'
      })
      .state('asst_main',{
        url: '/asst_main',
        templateUrl: 'views/asst_main.html'
      })
      .state('asst_edit',{
        url: '/asst_edit/:id',
        templateUrl: 'views/asst_edit.html',
        controller: 'EditAreaController'
      })
      .state('asst_new', {
        url: '/asst_new',
        templateUrl: 'views/asst_new.html'
      })
      .state('asst_list', {
        url: '/asst_list',
        templateUrl: 'views/asst_list.html'
      })
      .state('new_game', {
        url: '/asst_new',
        templateUrl: 'views/game_new.html'
  });
  });

