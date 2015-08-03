var myApp = angular.module('myApp', [ 'ngRoute', 'angularUtils.directives.dirPagination' ]);

myApp.config(function($routeProvider, $httpProvider) {
    $routeProvider.when('/', {
        templateUrl : 'partials/home.html',
        controller : 'home',
        activetab: 'home'
    }).when('/reports', {
        templateUrl : 'partials/reports.html',
        controller : 'reports',
        activetab: 'reports'
    }).when('/become', {
        templateUrl : 'partials/become.html',
        controller : 'become',
        activetab: 'become'
    }).when('/contacts', {
        templateUrl : 'partials/contacts.html',
        controller : 'contacts',
        activetab: 'contacts'
    }).when('/about', {
        templateUrl : 'partials/about.html',
        controller : 'about',
        activetab: 'about'
    }).when('/search', {
        templateUrl : 'partials/search.html',
        controller : 'search',
        activetab: 'search'
    }).when('/help', {
        templateUrl : 'partials/help.html',
        controller : 'help',
        activetab: 'help'
    }).otherwise('/');

    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

});

myApp.controller('widgetsController', function($scope, $route) {
    $scope.$route = $route;
}); 

myApp.controller('index', function($scope, $location, $anchorScroll) {
    $scope.scrollTo = function(id) {
        $location.hash(id);
        console.log($location.hash());
        $anchorScroll();
    };
    $scope.pc = indexPageContent;
});





