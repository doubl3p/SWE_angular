

(function () {

    function restAPICtrl(){

        function getKundeById($resource, idx){
            var vs = this;
             var bla = $resource("localhost:8443/kunden/:id", {id: idx}, {'get': {method: 'get'}});
            return bla;
        }
    }



    angular.module('restAPI', ['ngResource'])
        .controller('restAPICtrl', ["$resource", restAPICtrl] );

})();