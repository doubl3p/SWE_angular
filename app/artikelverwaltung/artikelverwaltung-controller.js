(function () {

    function artikelVerwCtrl(RestService){
        //this.service = ArtikelService;

        //this.getAllArtikel = function() {
        //    this.service.getResource()...
        //}

        //this.findArtikelById(id) {
        //    this.service..
        //    return...
        //}


        this.users = RestService.getProductKatalog().query();
    }


    angular.module('artikelVerw', [])
        .controller('artikelVerwCtrl', artikelVerwCtrl);

})();