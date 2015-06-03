//
(function () {
////
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
//
//
//
//angular.module('restAPI', ['ngResource'])
//    .controller('restAPICtrl', ["$resource", restAPICtrl] );
//
//})();
//

    //Beispiel von YouTube

//angular.module('restAPI', [])
//    .factory('UserService', function ($resource) {
//        return $resource('http://jsonplaceholder.typicode.com/users/:user',{user: "@user"});
//   });
//
//
//angular.module('restAPI', [])
//    .factory('UserService', function ($resource) {
//        return $resource('https://localhost:8443/shop/rest/kunden/:id',{id: "@id"});
//    });

// alles über 4rescource
//angular.module('restAPI', [])
//    .factory('UserService', function ($resource, $window) {
//
//        var vs = this;
//
//
//
//        var btoa = $window.btoa;
//
//        var loginname = "admin";
//        var password = "p";
//        var basic = "/shop/rest/katalog";
//        var basicAuth = 'Basic ' + btoa(loginname + ':' + password);
//
//        //vs.getKunden =
//
//        return $resource(basic, {}, {get: {method: 'GET', headers: {Authorization: basicAuth}}});
//    });

    ////////////////////////////////////////////////////////////////
    function RestService(MoebelREST) {
        return {

            getKunden: function () {

            return MoebelREST("/kunden");
            }
        }
    }

    function MoebelREST ($window, $resource, host) {

        var vs = this;
        var btoa = $window.btoa;
        var loginname = "admin";
        var password = "p";
        var basic = "/shop/rest";
        var basicAuth = 'Basic ' + btoa(loginname + ':' + password);
        var reqURL = basic + host;

        return return $resource(reqURL, {}, {get: {method: 'GET', headers: {Authorization: basicAuth}}});
    }


        angular.module('webapp')
            .service('RestService', RestService)
            .factory('MoebelREST', MoebelREST);


})();

// $http header anpassen
//angular.module('restAPI', [])
//    .factory('UserService', function ($resource, $window, $http) {
//
//
//        var btoa = $window.btoa;
//
//        var loginname = "admin";
//        var password = "p";
//        var basic = "https://localhost:8443/shop/rest/iam/login";
//        var basicAuth = 'Basic ' + btoa(loginname + ':' + password);
//
//        $http.defaults.headers.common['Authorization'] = basicAuth;
//        return $resource(basic, {}, {get: {method: 'GET'}});
//    });

