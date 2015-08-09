myApp.controller('login', ['$scope', '$location', function($scope,$location) {
	$scope.login = function(admin) {
		var m = {}
		m = angular.copy(admin);
        alert(angular.toJson(m));
		logined = true;
        $location.path('/admin');
    	$location.replace();
	}
}]);