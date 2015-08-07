myApp.controller('become', ['$scope', '$route', '$location', function($scope, $route, $location) {
	$scope.submit=function(fighter){
		var m = {}
		m = angular.copy(fighter);
        alert(angular.toJson(m));
        $location.path('#/')
    }

    $scope.updateFields = function() {
    	var bool1 = $scope.FighterForm.fighterPhone.$error.minlength;
    	var bool2 = angular.element(fp).hasClass("active");
    	// console.log(bool2);
    	// console.log(bool1);
    	var bool3 = (bool1 && bool2);
    	console.log(bool3);
    	return bool3;
    }
}]);


// myApp.controller('fighterFormController', ['$scope',  function($scope) {
	
// }]);