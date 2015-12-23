/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
var WeatherDemo;
(function (WeatherDemo) {
    "use strict";
    function routes($routeProvider) {
        $routeProvider
            .when("/query", {
            templateUrl: "/client/WeatherDemo/views/_search.html",
            controller: "QueryController",
            controllerAs: "vm"
        })
            .otherwise({
            redirectTo: "/query"
        });
    }
    routes.$inject = ["$routeProvider"];
    angular
        .module("WeatherDemo")
        .config(routes);
})(WeatherDemo || (WeatherDemo = {}));
