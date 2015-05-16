/**
 * Created by PePa on 16.05.2015.
 */

(function () {

var app = angular.module('home',[]);

//create a controller of the modul startpage
app.controller('homeCtrl', ['$scope', function($scope) {
        $scope.title = "Home";
        $scope.items = ['Duc', 'Kevin', 'Julian', 'Sally'];
        $scope.selectedValue = 'Sally';
    }]
);
}) ();

