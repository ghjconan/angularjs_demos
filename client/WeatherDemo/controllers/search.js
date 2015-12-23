/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-route.d.ts" />
var WeatherDemo;
(function (WeatherDemo) {
    var QueryController = (function () {
        function QueryController(WeatherService) {
            this.WeatherService = WeatherService;
            this.name = "shanghai";
        }
        QueryController.prototype.submit = function (name) {
            var _this = this;
            this.WeatherService.check(name).then(function (result) {
                _this.forcast = result.data;
            });
        };
        QueryController.$inject = ["WeatherService"];
        return QueryController;
    })();
    angular
        .module("WeatherDemo")
        .controller("QueryController", QueryController);
})(WeatherDemo || (WeatherDemo = {}));
