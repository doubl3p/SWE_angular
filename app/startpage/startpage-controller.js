/**
 * Created by PePa on 06.05.2015.
 */

// Runde klammer auf beschr�nkt globlae Verf�gbarkeit von Funktionen! wie genau
// http://benalman.com/news/2010/11/immediately-invoked-function-expression
(function () {

    //create a modul
    var app = angular.module('startpage',[]);

    //create a controller of the modul app
    app.controller('startpageCtrl', function(){
       this.kunde = customer;
    });

    var customer = {
        firstname: 'Duc',
        lastname: 'Pham Le',
        age: '55'
    }
}) ();