/**
 * Created by PePa on 17.05.2015.
 */

(function () {

    function kundenCtrl(UserService){
        var s = this;

        s.test =  "Mega";

        // das hier geht wunderbar und ruft z.B. alle Kunden ab, die es gibt.
        this.users = UserService.query();

        // Die zweit Variante sieht ungefähr so aus:
        // prich man muss nicht 2 Methoden implementieren für z.B. getKundeById und getAlleKunden sondern nur eine
        // wie im Video: https://www.youtube.com/watch?v=X_NZr_-RaLw



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
        .controller('kundenVerwCtrl', kundenCtrl);

})();