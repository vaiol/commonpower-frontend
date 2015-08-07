myApp.controller('reports', function($scope, $route, $location, $anchorScroll, Pager) {
	$scope.common = commonPageContent;
	$scope.newsList = [];
	$scope.total = 0;

    var pageSize = 10;
    $scope.pageSize = pageSize;

    var currentPage = 1;
    var infiniteScroll = false;
    $scope.paging = !infiniteScroll;
    $scope.currentPage = currentPage;
    $scope.pager = new Pager();



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


    $scope.scrollChange = function() {
        infiniteScroll = !infiniteScroll;
        if(!infiniteScroll) {
            
        } else {
            $scope.pager.nextPage(false);
        }
        $scope.paging = !infiniteScroll;
    }
    

    $scope.pageChangeHandler = pageChangeHandler;

    pageChangeHandler(currentPage);
});

myApp.factory('Pager', function() {
  var Pager = function() {
    this.items = [];
    this.busy = false;
    this.after = 1;
  };

  Pager.prototype.nextPage = function(bool) {
    if (!bool) {
        if (this.busy) return;
        this.busy = true;

        
        var items = getReports(this.after);
        if (items != null) {
            items = items.news;
            for (var i = 0; i < items.length; i++) {
                this.items.push(items[i]);
            }
            this.after += 1
        }
        this.busy = false;
    }
  };

  return Pager;
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
        news = newsPage3;
    } else if (pageNumber === 4) {
        news = newsPage4;
    } else if (pageNumber === 5) {
        news = newsPage5;
    } else if (pageNumber === 6) {
        news = newsPage6;
    } else if (pageNumber === 7) {
        news = newsPage7;
    } else if (pageNumber === 8) {
        news = newsPage8;
    } else if (pageNumber === 9) {
        news = newsPage9
    } else if (pageNumber === 10) {
        news = newsPage10;
    } else if (pageNumber === 11) {
        news = newsPage11
    } else if (pageNumber === 12) {
        news = newsPage12;
    } else {
        news = null;
    }
    return news;
}