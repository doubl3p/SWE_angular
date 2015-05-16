/**
 * Created by PePa on 16.05.2015.
 */

/**
 * Created by PePa on 16.05.2015.
 */

(function () {

    var app = angular.module('about',[]);

//create a controller of the modul startpage
    app.controller('aboutCtrl', ['$scope', function($scope) {
            $scope.title = "About";
            $scope.items = ['item1', 'item2', 'item3'];

        }]
    );
}) ();

