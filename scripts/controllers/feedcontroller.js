var App = angular.module('RSSFeedApp');


App.controller('FeedCtrl', ['$scope','FeedService', function ($scope,Feed) {
	$scope.siteHeading = 'Nandito ka na namang chismoso ka?';
	$scope.sources = Feed.getSources();
	$scope.sites = Feed.getSites();


	//local helper function
	var addContentImageToFeed = function(feedArray){
		for(var i=0; i < feedArray.length; i++){
			var contentString = feedArray[i].content;
			var src = contentString.match(/src\s*=\s*"(.+?)"/);
			if(src){
				var imageUrl = src[0].substr(5, src[0].length - 6);
				feedArray[i].image = imageUrl;
			}else{
			 	feedArray[i].image = "images/171.jpg";
			}
		}
	}

	$scope.loadFeed=function(site){
		$scope.siteHeading = site.name;
		Feed.parseFeed(site.rssUrl).then(function(res){
			$scope.feeds=res.data.responseData.feed.entries;
			addContentImageToFeed($scope.feeds);
		});		
	};
	
	$scope.loadInitial=function(){
		$scope.feeds = [];
		for(var i = 0; i < $scope.sources.length; i++){
			Feed.parseFeed($scope.sources[i]).then(function(res){
				var feedEntries = res.data.responseData.feed.entries;
				for(var i=0; i<2; i++){
					$scope.feeds.push(feedEntries[i]);
				}
				addContentImageToFeed($scope.feeds);
			});	
		}	
	}
	$scope.loadInitial();	
}]);