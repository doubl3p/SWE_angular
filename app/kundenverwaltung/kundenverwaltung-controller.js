(function () {

    function kundenVerwCtrl(RestService){
        var s = this;

        s.filter = {id: ''};

        s.json =    {
            "type": "F",
            "identity": {
                "loginname": "string",
                "enabled": true,
                "expirationDate": "2015-06-11T11:01:16.263Z",
                "password": "string",
                "passwordWdh": "string",
                "nachname": "string",
                "vorname": "string",
                "email": "string@strinbgf.de",
                "adresse": {
                    "plz": "77777",
                    "ort": "string",
                    "strasse": "string",
                    "hausnr": "4"
                }
            },
            "seit": "2015-06-11T11:01:16.263Z",
            "agbAkzeptiert": true
        }





        // das hier geht wunderbar und ruft z.B. alle Kunden ab, die es gibt.
        s.users = RestService.getKunden().query();

        // wie im Video: https://www.youtube.com/watch?v=X_NZr_-RaLw

        s.loadCurrentUser = function(userId){
            s.currentUser = _.findWhere(s.users, {id: userId});
        }

        s.findKundeById = function(id) {
            this.oneUser = RestService.getKunden().get({id: id});
        };

        s.deleteKunde = function(id) {
            RestService.deleteKunde.delete({id: s.currentUser.id});
        };

        this.createKunde = function (){
            RestService.createKunde().save(s.json)
        };
        s.updateKunde = function() {
            RestService.updateKunde().update({
                "type": "F",
                //"id": 303,
                "identity": {
                    "loginname": "Duci",
                    "enabled": true,
                    "expirationDate": "2015-06-11T11:01:16.263Z",
                    "password": "123456",
                    "passwordWdh": "123456",
                    "nachname": "Le",
                    "vorname": "Duc",
                    "email": "leduc@hs-karlsruhe.de.de",
                    "adresse": {
                        "plz": "77777",
                        "ort": "Karlsruhe",
                        "strasse": "Straﬂestraﬂe",
                        "hausnr": "4"
                    }
                },
                "seit": "2015-06-11T11:01:16.263Z",
                "agbAkzeptiert": true
            }
          );



        };



        //this.addKunde = function() {
        //    RestService.createKunde().save({identity: {loginname: "jules", enabled: "true", nachname: "schnurr", vorname: "julian", email: "Schnurr-Julian-web@web.de"},
        //        adresse: {plz:"77794", ort: "Lautenbach", strasse: "Vorder-Winterbach", hausnr: "18a"}, seit: "2015-06-09" });
        //
        //}

    }


    angular.module('kundenVerw', [])
        .controller('kundenVerwCtrl', kundenVerwCtrl);

})();