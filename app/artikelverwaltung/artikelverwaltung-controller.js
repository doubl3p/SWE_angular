(function () {

    function artikelVerwCtrl(RestService){

        var vm = this;
        // TODO: nachsehen wie man diese Daten eventuell in die Funktion create Atikel verlagert
        vm.json = {
            bezeichnung: "",
            preis: "",
            rating: "",
            ausgesondert: "false"};

        // liefert einen Artikel anhand der id
        this.findArtikelById = function(id) {
            this.oneArtikel = RestService.getProductKatalog().get({id: id});
        }

        // liefert alle Artikel im Katalog
        this.artikel = RestService.getProductKatalog().query();

        //neuer Artikel anlegen
        this.createArtikel = function (){
            RestService.createArtikel().save(vm.json);
        }
    }

    angular.module('artikelVerw', [])
        .controller('artikelVerwCtrl', artikelVerwCtrl);
})();