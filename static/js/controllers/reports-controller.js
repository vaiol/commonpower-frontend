myApp.controller('reports', function($scope, $route, $location, $anchorScroll) {
	$scope.common = commonPageContent;
	$scope.newsList = [];
	$scope.total = 0;

    var pageSize = 10;
    $scope.pageSize = pageSize;

    var currentPage = 1;
    $scope.currentPage = currentPage;



    var pageChangeHandler = function(pageNumber) {
        var news = getReports(pageNumber); 

        if (news != false) {
            $scope.newsList = truncateReportsPreview(news.news);
            $scope.pageSize = news.page.size;
            $scope.total = (news.page.size * news.page.totalPages);
            if (currentPage != pageNumber) {
                currentPage = pageNumber;
                $location.hash("top-row");
                $anchorScroll();
            }
        }
    }
    

    $scope.pageChangeHandler = pageChangeHandler;

    pageChangeHandler(1);
});



var truncateReportsPreview = function(news) {
	var previewMaximumLength = 125;
    for (var i = 0; i < news.length; i++) {
        news[i].preview = news[i].preview.substring(0, previewMaximumLength) + "...";
    };
    return news;
}

var getReports = function(pageNumber) {
    var news; //TO DO http request
    var bool = true;
    if (pageNumber === 1) {
        news = newsPage1;
    } else if (pageNumber === 2) {
        news = newsPage2;
    } else if (pageNumber === 3) {
        news = newsPage1;
    } else if (pageNumber === 4) {
        news = newsPage2;
    } else if (pageNumber === 5) {
        news = newsPage1;
    } else if (pageNumber === 6) {
        news = newsPage2;
    } else if (pageNumber === 7) {
        news = newsPage1;
    } else if (pageNumber === 8) {
        news = newsPage2;
    } else if (pageNumber === 9) {
        news = newsPage1
    } else if (pageNumber === 10) {
        news = newsPage2;
    } else if (pageNumber === 11) {
        news = newsPage1
    } else if (pageNumber === 12) {
        news = newsPage2;
    } else {
        news = false;
    }
    return news;
}