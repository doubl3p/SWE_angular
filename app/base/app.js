(function () {
    // wirft einen error, wenn man z.B. einer nicht deklarierten Variable einen Wert zuweisen möchte etc.
    'use strict';

    angular.module('webapp',
        ['reg', 'bestellVerw', 'kundenVerw', 'artikelVerw', 'ui.router', 'ngResource', 'restService', 'warenkorbService'])
})();
