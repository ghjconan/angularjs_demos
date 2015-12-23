/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-route.d.ts" />
module WeatherDemo {

	class QueryController {

		private name : string;
        private forcast : Forcast;

		static $inject = ["WeatherService"];
		constructor(private WeatherService: IWeatherService) {
			this.name = "shanghai";
		}

		submit(name: string) {
			this.WeatherService.check(name).then((result : ng.IHttpPromiseCallbackArg<Forcast>) =>{
				this.forcast = result.data;
			}); 
		}

	}

    angular
		.module("WeatherDemo")
		.controller("QueryController", QueryController);
}