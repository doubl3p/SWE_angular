(function () {
//    function restAPICtrl(){
//
//    function getKundeById($resource){
//
//        var kunde = $resource("localhost:8443/shop/rest/kunden/:id", {id: "@id"}, {});
//        var selected = null;
//
//
//        kunde.get({id: '300'}, function(data){
//            this.selected = data;
//        })
//    }
//}

    function RestService($window, $resource) {
        var sv = this;
        sv.btoa = $window.btoa;
        sv.loginname = "admin";
        sv.password = "p";
        sv.basicAuth = 'Basic ' + btoa(sv.loginname + ':' + sv.password);

        this.getProductKatalog = function() {
            return $resource('/shop/rest/katalog', {}, {get: {method: 'GET', headers: {Authorization: sv.basicAuth}}});
        }

        this.getKunden = function() {
            return $resource('/shop/rest/kunden', {}, {get: {method: 'GET', headers: {Authorization: sv.basicAuth}}});
        }

        this.createKunden = function() {
            var data = $resource('/shop/rest/kunden/:id', {id: '@id'}, {update: {method: 'PUT'}}, {get: {method: 'GET', headers: {Authorization: sv.basicAuth}}});
            return data;
        }
    };

    angular.module('restService', [])
        .service('RestService', RestService);
}());

