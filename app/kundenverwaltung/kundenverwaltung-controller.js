/**
 * Created by PePa on 17.05.2015.
 */

(function () {

    function kundenCtrl(UserService){
        var s = this;

        s.test =  "Mega";
        this.users = UserService.query();
        //
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