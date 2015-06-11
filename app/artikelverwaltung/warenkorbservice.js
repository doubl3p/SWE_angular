(function () {
    function WarenkorbService() {
        var vm = this;
        vm.warenkorb = [];
        vm.WarenkorbService = {};

        WarenkorbService.add = function(artikel) {
            vm.warenkorb.push(artikel);
        };
        WarenkorbService.list = function() {
            return vm.warenkorb;
        };

        return WarenkorbService;

    };

    angular.module('warenkorbService', [])
        .service('WarenkorbService', WarenkorbService);
}());

