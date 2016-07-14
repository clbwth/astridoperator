// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var AstridDB = null;
angular.module('Astrid_Op', ['ionic', 'ngCordova', 'ngOnload'])

.run(function($ionicPlatform, $cordovaSQLite) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    /**
     * Create/Open db
     */
    document.addEventListener("deviceready", function () {
      AstridDB = window.sqlitePlugin.openDatabase({name: 'Astrid.db', location: 'default'});
      $cordovaSQLite.execute(AstridDB, "CREATE TABLE IF NOT EXISTS table_inspections (id integer primary key, ga_name text, town_of text, assets text, orig_id integer, is_inspected integer, is_uploaded integer)");

    });
})});
