/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-route.d.ts" />
var WeatherDemo;
(function (WeatherDemo) {
    "use strict";
    function asHtml($sce) {
        return function (text) {
            return $sce.trustAsHtml(text);
        };
    }
    WeatherDemo.asHtml = asHtml;
    angular
        .module("WeatherDemo")
        .filter("asHtml", asHtml);
    asHtml.$inject = ["$sce"];
})(WeatherDemo || (WeatherDemo = {}));
