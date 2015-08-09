myApp.controller('become', ['$scope', '$route', '$location', '$routeParams', function($scope, $route, $location, $routeParams) {
    var person = $routeParams.person;
    var fighter = angular.element( document.querySelector( '#fighter-link' ) );
    var owner = angular.element( document.querySelector( '#owner-link' ) );
    var organization = angular.element( document.querySelector( '#organization-link' ) );
    if (person === 'fighter') {
        owner.removeClass('active');
        organization.removeClass('active');
        fighter.addClass('active');
        console.log('remove active for fighter')
    } else if (person === 'owner') {
        fighter.removeClass('active');
        organization.removeClass('active');
        owner.addClass('active');
        console.log('remove active for owner')
    } else if (person === 'organization') {
        fighter.removeClass('active');
        owner.removeClass('active');
        organization.addClass('active');
        console.log('remove active for organization')
    }
    (function($){
        $(function(){
            $('ul.tabs').tabs();
        });
    })(jQuery);
        
    
    $scope.submit=function(fighter){
		var m = {}
		m = angular.copy(fighter);
        alert(angular.toJson(m));
        $location.path('#/').replace();
        $scope.$apply();
    }

    $scope.updateFields = function() {
    	var bool1 = $scope.FighterForm.fighterPhone.$error.minlength;
    	var bool2 = angular.element(fp).hasClass("active");
    	// console.log(bool2);
    	// console.log(bool1);
    	var bool3 = (bool1 && bool2);
    	return bool3;
    }
    var tabInit = function() {
        
        

    }
}]);


// myApp.controller('fighterFormController', ['$scope',  function($scope) {
	
// }]);