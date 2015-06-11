(function () {
    function WarenkorbService() {
        var vm = this;
        vm.warenkorb = [];
        var zl = 0;
        vm.gesamtpreis = 0;

        vm.WarenkorbService = {};

        WarenkorbService.add = function(artikel) {
            vm.warenkorb.push(artikel);
        };
        WarenkorbService.list = function() {
            return vm.warenkorb;
        };
        WarenkorbService.getGesamtpreis = function(){
            for(zl; zl < vm.warenkorb.length; zl++){
                vm.gesamtpreis = vm.gesamtpreis + vm.warenkorb[zl].preis;
            }
            return vm.gesamtpreis;
        }

        return WarenkorbService;

    };

    angular.module('warenkorbService', [])
        .service('WarenkorbService', WarenkorbService);
}());

