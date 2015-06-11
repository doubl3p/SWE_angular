(function () {

    function artikelVerwCtrl(RestService){
        var vm = this;

        // TODO: nachsehen wie man diese Daten eventuell in die Funktion create Atikel verlagert
        vm.json = {
            bezeichnung: "",
            preis: "",
            rating: "",
            ausgesondert: "false"};

        // liefert alle Artikel im Katalog
        vm.katalog = RestService.getProductKatalog().query();

        // neuer Artikel anlegen
        vm.createArtikel = function (){
            RestService.createArtikel().save(vm.json);
        }

        // Artikel updaten
        vm.updateArtikel = function (){
            RestService.updateArtikel().update({id: vm.currentArtikel.id, bezeichnung: vm.currentArtikel.bezeichnung, preis: vm.currentArtikel.preis, rating: vm.currentArtikel.rating, ausgesondert: vm.currentArtikel.ausgesondert});
        }

        // lädt artikel anhand von parameter id
        this.loadCurrentArtikel = function(artikelId){
            vm.currentArtikel = _.findWhere(vm.katalog, {id: artikelId});
        }

        // liefert einen Artikel anhand der id
        vm.findArtikelById = function(id) {
            this.oneArtikel = RestService.getProductKatalog().get({id: id});
        }
    }

    angular.module('artikelVerw', [])
        .controller('artikelVerwCtrl', artikelVerwCtrl);
})();