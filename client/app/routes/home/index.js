/**
 * Created by Jeevan on 2/1/2016.
 */
app.config(['$stateProvider',
    function($stateProvider){
    $stateProvider
        .state('home',{
            url:'/home',
            templateUrl:'/home.html',
            controller:'HomeCtrl'
        })
}]);