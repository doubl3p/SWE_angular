
//
//(function () {
//
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

    angular.module('restAPI', [])
        .factory('UserService', function ($resource) {
            return $resource('http://jsonplaceholder.typicode.com/users/:user',{user: "@user"});
        });


