﻿myApp.controller('info', ['$scope', function($scope) {
	var initialize = function() {
        var mapCanvas = document.getElementById('map-canvas');
        var mapOptions = {
         	center: new google.maps.LatLng(44.5403, -78.5463),
	        zoom: 8,
	        mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
    }
    $scope.initialize = initialize;
    google.maps.event.addDomListener(window, 'load', initialize);
    (function($){
        $(function(){
            $('.materialboxed').materialbox();
            $('.slider').slider({full_width: true});
        });
    })(jQuery);
    
}]);