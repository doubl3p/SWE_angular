(function () {

    function kundenVerwCtrl(RestService){
        var s = this;

        this.filter = {id: ''};
        // das hier geht wunderbar und ruft z.B. alle Kunden ab, die es gibt.
        s.users = RestService.getKunden().query();

        this.addKunde = function() {
            RestService.updateKunde.update();
        };



        //funktioniert noch nicht
        //s.getUserId = function (kundeId) {
        //    KundeIdService.get({id: kundeId})
        //};
        //
        //s.addUser = function(){
        //    KundeIdService.save({id: 403},{identity: {vorname: "pa", nachname: "pa", email: "papa@hs-karlsruhe.de"}});
        //};
        //
        //s.updateUser = function(kundeId, putVorname, putNachname, putEmail){
        //    KundeIdService.update({id: kundeId},{identity: {vorname: putVorname, nachname: putNachname, email: putEmail}})
        //};





        // Die zweit Variante sieht ungefähr so aus:
        // prich man muss nicht 2 Methoden implementieren für z.B. getKundeById und getAlleKunden sondern nur eine
        // wie im Video: https://www.youtube.com/watch?v=X_NZr_-RaLw

        //Zimmermann Server URL
        //https://localhost:8443/shop/rest/kunden/

        //var vm = this;
        //
        //vm.kunde = restAPIFac.get();

    //    function loadKundeById(id){
    //
    //        var kundePromise = restAPI.getKundeById(id);
    //        kundePromise.then(function (kunde) {
    //            vm.kunde = kunde;
    //        }, function (err) {
    //            console.log(err);
    //        });
    //    }
    }


    angular.module('kundenVerw', [])
        .controller('kundenVerwCtrl', kundenVerwCtrl);

})();