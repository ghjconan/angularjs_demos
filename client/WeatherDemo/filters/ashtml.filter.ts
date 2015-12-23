/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-route.d.ts" />

module WeatherDemo{
	"use strict";
	
	export function asHtml($sce : ng.ISCEService) 	{
		return (text : string) => {
			return $sce.trustAsHtml(text);
		}
	}
	
	angular
		.module("WeatherDemo")
		.filter("asHtml", asHtml);
		
	asHtml.$inject = ["$sce"];
}