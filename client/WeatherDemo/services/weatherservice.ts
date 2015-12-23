/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-route.d.ts" />
module WeatherDemo{
	
	export interface IWeatherService {
		check(name:string) : ng.IPromise<ng.IHttpPromiseCallbackArg<Forcast>>;
	}
	
	class WeatherService implements IWeatherService {
		
		static $inject = ["$http"];
		constructor(private $http : ng.IHttpService) {
			
		}
		
		check(name:string) : ng.IPromise<ng.IHttpPromiseCallbackArg<Forcast>> {
			return this.$http.get("http://api.openweathermap.org/data/2.5/weather?q=" + name + "&appid=2de143494c0b295cca9337e1e96b00e0");
		}		
	}
	
    angular
	    .module("WeatherDemo")
    	.service("WeatherService", WeatherService);
}