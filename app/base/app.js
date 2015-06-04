(function () {
    // wirft einen error, wenn man z.B. einer nicht deklarierten Variable einen Wert zuweisen möchte etc.
    'use strict';

    angular.module('webapp',
        ['reg', 'bestellVerw', 'kundenVerw', 'artikelVerw', 'ui.router', 'ngResource', 'restAPI'])

         //angular Services werden zweimal angegeben. Da Parameter bei Minifien z.B. zu a und b werden
         //Parameter kann man benennen wie man mag
        .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){

            //wenn man hinter '#/' etwas eingibt, dass es nicht gibt wird hier hin geroutet
            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('artikel', {
                    url: '/artikel',
                    templateUrl: 'artikelverwaltung/artikelverwaltung.html',
                    controller: 'artikelVerwCtrl as artikelCtrl'
                })

                .state('kunden', {
                    url: '/kunden',
                    templateUrl: 'kundenverwaltung/kundenverwaltung.html',
                    controller: 'kundenVerwCtrl as kundenCtrl'
                })

                .state('kundenBearbeiten', {
                    url: '/kundenBearbeiten',
                    templateUrl: 'kundenverwaltung/kundenbearbeiten.html',
                    controller: 'kundenVerwCtrl as kundenCtrl'
                })

                .state('login', {
                    url: '/meinKonto/login',
                    templateUrl: 'kundenverwaltung/login.html',
                    controller: 'kundenVerwCtrl as kundenCtrl'
                })

                .state('bestellung', {
                    url: '/meinKonto/bestellung',
                    templateUrl: 'bestellverwaltung/bestellverwaltung.html',
                    controller: 'bestellVerwCtrl as bestellCtrl'
                })

                .state('warenkonto', {
                    url: '/warenkonto',
                    templateUrl: 'kundenverwaltung/kundenverwaltung.html',
                    controller: 'bestellVerwCtrl as bestellCtrl'
                })

                .state('about', {
                    url: '/about',
                    templateUrl: 'templates/about.html',
                    controller: 'aboutCtrl as about'
                });

        }]);


})();
