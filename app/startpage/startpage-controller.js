/**
 * Created by PePa on 06.05.2015.
 */

// Runde klammer auf beschränkt globlae Verfügbarkeit von Funktionen! wie genau
// http://benalman.com/news/2010/11/immediately-invoked-function-expression
(function () {

    //create a modul
    var app = angular.module('startpage',[]);

    //create a controller of the modul startpage
    app.controller('startpageCtrl', function(){
       this.kunde = customer;
    });

    //Daten kommen später über REST Schnittstelle
    var customer = {
        firstname: 'Duc',
        lastname: 'Pham Le',
        age: '55'
    }
}) ();