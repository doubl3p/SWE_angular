(function () {

    function kundenVerwCtrl(RestService){
        var s = this;

        s.filter = {id: ''};

        s.json =  {
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
            bestellungUri: ""
        };

        // das hier geht wunderbar und ruft z.B. alle Kunden ab, die es gibt.
        s.users = RestService.getKunden().query();

        // wie im Video: https://www.youtube.com/watch?v=X_NZr_-RaLw

        s.loadCurrentUser = function(userId){
            s.currentUser = _.findWhere(s.users, {id: userId});
        }

        s.findKundeById = function(id) {
            this.oneUser = RestService.getKunden().get({id: id});
        };

        s.updateKunde = function() {
            RestService.updateKunde().update({
                                    id: s.currentUser.id,
                                    identity:   {

                                        vorname: s.currentUser.identity.vorname,
                                        nachname: s.currentUser.identity.nachname,
                                        email: s.currentUser.identity.email,

                                        adresse:    {
                                                    plz: s.currentUser.identity.adresse.plz,
                                                    ort: s.currentUser.identity.adresse.ort,
                                                    strasse: s.currentUser.identity.adresse.strasse,
                                                    hausnr: s.currentUser.identity.adresse.hausnr}},
                                    kategorie: s.currentUser.kategorie,
                                    seit: s.currentUser.seit,
                                    newsletter: s.currentUser.newsletter,
                                    agbAkzeptier: s.currentUser.agbAkzeptiert});

        };

        s.deleteKunde = function(id) {
            RestService.deleteKunde.delete({id: s.currentUser.id});
        };

        //this.addKunde = function() {
        //    RestService.createKunde().save({identity: {loginname: "jules", enabled: "true", nachname: "schnurr", vorname: "julian", email: "Schnurr-Julian-web@web.de"},
        //        adresse: {plz:"77794", ort: "Lautenbach", strasse: "Vorder-Winterbach", hausnr: "18a"}, seit: "2015-06-09" });
        //
        //}
        this.createKunde = function (){
            RestService.createKunde().save(s.json)
        };
    }


    angular.module('kundenVerw', [])
        .controller('kundenVerwCtrl', kundenVerwCtrl);

})();