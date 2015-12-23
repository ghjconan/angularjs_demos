/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-route.d.ts" />
var WeatherDemo;
(function (WeatherDemo) {
    var WeatherService = (function () {
        function WeatherService($http) {
            this.$http = $http;
        }
        WeatherService.prototype.check = function (name) {
            return this.$http.get("http://api.openweathermap.org/data/2.5/weather?q=" + name + "&appid=2de143494c0b295cca9337e1e96b00e0");
        };
        WeatherService.$inject = ["$http"];
        return WeatherService;
    })();
    angular
        .module("WeatherDemo")
        .service("WeatherService", WeatherService);
})(WeatherDemo || (WeatherDemo = {}));
