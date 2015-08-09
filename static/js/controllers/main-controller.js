var myApp = angular.module('myApp', [ 'ngRoute', 'angularUtils.directives.dirPagination', 'ui.materialize', 'infinite-scroll', 'ngAnimate', 'smoothScroll']);
var logined = false;

myApp.config(function($routeProvider, $httpProvider, $locationProvider) {
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
    }).when('/become/:person', {
        templateUrl : 'partials/become.html',
        controller : 'become',
        activetab: 'become'
    }).when('/info', {
        templateUrl : 'partials/info.html',
        controller : 'info',
        activetab: 'info'
    }).when('/search', {
        templateUrl : 'partials/search.html',
        controller : 'search',
        activetab: 'search'
    }).when('/help', {
        templateUrl : 'partials/help.html',
        controller : 'help',
        activetab: 'help'
    }).when('/login', {
        templateUrl : 'partials/login.html',
        controller : 'login'
    }).otherwise('/');

    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

});

myApp.controller('widgetsController', function($scope, $route) {
    $scope.$route = $route;
}); 

myApp.controller('index', function($scope, $location, $anchorScroll, $route) {
    $scope.isLogined = function() {
        return logined;
    }
    $scope.exit = function() {
        logined = false;
        $route.reload();
    }
    $scope.pc = indexPageContent;
});
jQuery(document).ready(function($){
    var offset = 800,
        offset_opacity = 1300,
        scroll_top_duration = 700,
        $back_to_top = $('.btn-top');
    $(window).scroll(function(){
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if( $(this).scrollTop() > offset_opacity ) { 
            $back_to_top.addClass('cd-fade-out');
        }
    });
});




