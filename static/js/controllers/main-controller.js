var myApp = angular.module('myApp', [ 'ngRoute', 'angularUtils.directives.dirPagination', 'ui.materialize', 'infinite-scroll', 'ngAnimate', 'smoothScroll']);

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
jQuery(document).ready(function($){
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 800,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1300,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.btn-top');

    //hide or show the "back to top" link
    $(window).scroll(function(){
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if( $(this).scrollTop() > offset_opacity ) { 
            $back_to_top.addClass('cd-fade-out');
        }
    });


});




