(function () {

    function artikelVerwCtrl(RestService){

        this.oneArtikel = undefined;

        // liefert einen Artikel anhand der id
        this.findArtikelById = function(id) {
            oneArtikel = RestService.getProductKatalog().get({id: id});
        }

        //this.oneArtikel = RestService.getProductKatalog().get({id: '501'});

        // liefert alle Artikel im Katalog
        this.artikel = RestService.getProductKatalog().query();
    }


    angular.module('artikelVerw', [])
        .controller('artikelVerwCtrl', artikelVerwCtrl);

})();