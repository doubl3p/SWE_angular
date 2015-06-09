(function () {

    function artikelVerwCtrl(RestService){

        // liefert einen Artikel anhand der id
        this.findArtikelById = function(id) {
            this.oneArtikel = RestService.getProductKatalog().get({id: id});
        }

        // liefert alle Artikel im Katalog
        this.artikel = RestService.getProductKatalog().query();

        //neuer Artikel anlegen
        //this.createArtikel = function (artikelbezeichnung, preis, rating){
        //    RestService.createArtikel().save({artikelbezeichnung: artikelbezeichnung,
        //                                      preis: preis,
        //                                      rating: rating});
        //}


        this.createArtikel = function (){
            RestService.createArtikel().save({
                                                bezeichnung: "Haengematte Goeransen",
                                                preis: "650",
                                                rating: "5",
                                                ausgesondert: "false"}
                );
        }
    }

    angular.module('artikelVerw', [])
        .controller('artikelVerwCtrl', artikelVerwCtrl);
})();