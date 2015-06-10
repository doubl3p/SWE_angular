(function () {

    function kundenVerwCtrl(RestService){
        var s = this;

        this.filter = {id: ''};

        this.findKundeById = function(id) {
            this.oneUser = RestService.getKunden().get({id: id});
        }

        this.updateIdentityKunde = function(id, vorname, nachname, email) {
            RestService.updateKunde().update({id: id},{identity: {vorname: vorname, nachname: nachname, email: email}});
        }

        this.deleteKunde = function(id) {
            RestService.deleteKunde.remove({id: id});
        }

        //this.addKunde = function() {
        //    RestService.createKunde().save({identity: {loginname: "jules", enabled: "true", nachname: "schnurr", vorname: "julian", email: "Schnurr-Julian-web@web.de"},
        //        adresse: {plz:"77794", ort: "Lautenbach", strasse: "Vorder-Winterbach", hausnr: "18a"}, seit: "2015-06-09" });
        //
        //}
        this.createKunde = function (){
            RestService.createKunde().save({
                    type: "F",
                    identity: {
                        loginname: "jules",
                        enabled: true,
                        nachname: "schnurr",
                        vorname: "julian",
                        email: "Schnurr-Julian-web@web.de",
                        adresse: {
                            plz: "77794",
                            ort: "Lautenbach",
                            strasse: "Vorder-Winterbach",
                            hausnr: "18a"
                        }
                    },
                    kategorie: 1,
                    seit: "2015-06-09" ,
                    newsletter: false,
                    agbAkzeptiert: true,
                    bestellungUri: ""}
            );
        }

        // das hier geht wunderbar und ruft z.B. alle Kunden ab, die es gibt.
        s.users = RestService.getKunden().query();

        // wie im Video: https://www.youtube.com/watch?v=X_NZr_-RaLw

    }


    angular.module('kundenVerw', [])
        .controller('kundenVerwCtrl', kundenVerwCtrl);

})();