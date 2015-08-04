myApp.controller('home', ['$scope', '$route', function($scope, $route) {
    //activate jquery plugin (materialize design)
    (function($){
        $(function(){
            $('.button-collapse').sideNav({
                    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
                });
            $('.parallax').parallax();

        });
    })(jQuery);
    $scope.pc = mainPageContent;

    

    var news = newsList; //TO DO http request
    var org = organizations; //TO DO http request
    var fighters = fightersList; //TO DO http request
    var benefactors = benefactorsList; //TO DO http request

    org = truncateOrganizations(org);
    fighters = truncateFighters(fighters, benefactors.length);

    $scope.common = commonPageContent;
    $scope.newsList = truncateNews(news);
    $scope.fighters = fighters;
    $scope.benefactors = truncateBenefactors(benefactors, fighters.length);
    $scope.organizations = org;
    $scope.organizationsP1 = getOrganizationsPart(org, 0, 3);
    $scope.organizationsP2 = getOrganizationsPart(org, 3, 6);
}]);

var truncateNews = function(news) {
    var maximumNews = 3;
    var newsListLength;
    if (news.length >= maximumNews) {
        newsListLength = maximumNews;
    } else {
        newsListLength = news.length;
    }
    var previewMaximumLength = 125;
    var newsList = new Array(newsListLength);
    for (var i = 0; i < newsList.length; i++) {
        newsList[i] = news[i];
        newsList[i].preview = newsList[i].preview.substring(0, previewMaximumLength) + "...";
    };
    return newsList;
}


var truncateFighters = function(fighters, benefactorsLength) {
    var length = benefactorsLength / 2;
    length = parseInt(length, 10)
    if (fighters.length <= length) {
        return fighters;
    } 
    var fighterList = new Array(length);
    for (var i = 0; i < fighterList.length; i++) {
        fighterList[i] = fighters[i];
    };
    return fighterList;
} 

var truncateBenefactors = function(benefactors, fightersLength) {
    var length = fightersLength * 2;
    if (benefactors.length <= length) {
        return benefactors;
    }
    var benefactorList = new Array(length);
    for (var i = 0; i < benefactorList.length; i++) {
        benefactorList[i] = benefactors[i];
    };
    return benefactorList;
}


var truncateOrganizations = function(organizations) {
    var maximumOrganiztions = 6;
    var orgLength;
    if (organizations.length >= maximumOrganiztions) {
        orgLength = maximumOrganiztions;
    } else {
        orgLength = organizations.length;
    }
    var orgList = new Array(orgLength);
    for (var i = 0; i < orgList.length; i++) {
        orgList[i] = organizations[i];
    };
    if(orgList.length < maximumOrganiztions) {
        var demoOrganization = {
            "img": "image/fond-logo-6.png"
        }
        for (var i = orgList.length; i < maximumOrganiztions; i++) {
            orgList.push(demoOrganization);
        };
    }
    return orgList;
}

var getOrganizationsPart = function(organizations, startPoint, endPoint) {
    var organizationsPart = new Array(endPoint - startPoint);
    var j = 0
    for (var i = startPoint; i < endPoint; i++) {
        organizationsPart[j] = organizations[i];
        j++;
    }
    return organizationsPart;   
}