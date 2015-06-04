(function () {

    function artikelVerwCtrl(ArtikelService){
        var vs = this;

        this.users = ArtikelService.query();
    }


    angular.module('artikelVerw', [])
        .controller('artikelVerwCtrl', artikelVerwCtrl);

})();