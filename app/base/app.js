/**
 * Created by PePa on 16.05.2015.
 */

(function () {
    // wirft einen error, wenn man z.B. einer nicht deklarierten Variable einen Wert zuweisen möchte etc.
    'use strict';

    angular.module('webapp',
        ['home', 'ui.router'])

         //angular Services werden zweimal angegeben. Da Parameter bei Minifien z.B. zu a und b werden
         //Parameter kann man benennen wir man mag
        .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){

            //wenn man hinter '#/' etwas eingibt, dass es nicht gibt wird hier hin geroutet
            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'templates/home.html',
                    controller: 'homeCtrl'

                })
                .state('about', {
                    url: '/about',
                    templateUrl: 'templates/about.html',
                    controller: 'aboutCtrl'
                })
                .state('contact', {
                    url: '/contact',
                    templateUrl: 'templates/contact.html'
                });

        }]);


})();
