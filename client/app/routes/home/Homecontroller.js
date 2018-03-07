/**
 * Created by Jeevan on 2/1/2016.
 */
'use strict';
app.controller('HomeCtrl', ['$scope', '$http', 'HomeFactory', function ($scope, $http, HomeFactory) {
    $scope.detail = HomeFactory.details;
    $scope.movies = {};
    $scope.$watch('search', function () {
        fetch();
    });
    $scope.search = "Dil Chahta Hai";
    function fetch() {

        $http.get("https://www.omdbapi.com/?apikey=ccfd4ac2=" + $scope.search)
            .then(function (response) {
                $scope.details = response.data;
            });
    }

    $scope.movies = {};
    $scope.update = function (details) {
        $scope.movies = {
            title: details.Title,
            posters: details.Poster,
            released_on:details.Released,
            actors:details.Actors,
            director:details.Director,
            movietype:details.Genre
        }
        var res = $http.post('api/movies', $scope.movies);
        res.success(function(data, status, headers, config) {
            $scope.message = data;
        });
        res.error(function(data, status) {
            console.error('Repos error', status, data);
            $scope.message = data;
        });
    };
    $scope.reset = function () {
        $scope.details = '';
        $scope.search='';
        $scope.message='';
    };


}]);

