/**
 * Created by Jeevan on 2/1/2016.
 */
var app=angular.module('mainApp',['ui.router']);
app.config(['$urlRouterProvider',function($urlRouterProvider){
    $urlRouterProvider.otherwise('home');
}] );
