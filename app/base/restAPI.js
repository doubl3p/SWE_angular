(function () {
    function RestService($window, $resource) {
        var sv = this;
        sv.btoa = $window.btoa;
        sv.loginname = "admin";
        sv.password = "p";
        sv.basic = "/shop/rest";
        sv.basicAuth = 'Basic ' + btoa(sv.loginname + ':' + sv.password);

        this.getProductKatalog = function() {
            return $resource(sv.basic + '/katalog/:id', {id: '@id'}, {get: {method: 'GET', headers: {Authorization: sv.basicAuth}}});
        }

        this.getKunden = function() {
            return $resource(sv.basic + '/kunden/:id', {id: '@id'}, {get: {method: 'GET', headers: {Authorization: sv.basicAuth}}});
        }

        this.updateKunde = function() {
            var data = $resource(sv.basic + '/kunden/:id', {id: '@id'}, {update: {method: 'PUT'}}, {get: {method: 'GET', headers: {Authorization: sv.basicAuth}}});
            return data;
        }

        this.createKunde = function() {
            var data = $resource(sv.basic + '/registrierung', {update: {method: 'POST'}}, {get: {method: 'GET', headers: {Authorization: sv.basicAuth}}});
            return data;
        }

        this.deleteKunde = function() {
            var data = $resource(sv.basic + '/kunden/:id', {id: '@id'}, {update: {method: 'DELETE'}}, {get: {method: 'GET', headers: {Authorization: sv.basicAuth}}});
            return data;
        }

        this.updateArtikel = function() {
            var data = $resource(sv.basic + '/artikel/:id', {id: '@id'}, {update: {method: 'PUT'}}, {get: {method: 'GET', headers: {Authorization: sv.basicAuth}}});
            return data;
        }

        this.createArtikel = function() {
            var data = $resource(sv.basic + '/artikel/:id', {id: '@id'}, {update: {method: 'PUT'}}, {get: {method: 'GET', headers: {Authorization: sv.basicAuth}}});
            return data;
        }

    };
    
    angular.module('restService', [])
        .service('RestService', RestService);
}());

