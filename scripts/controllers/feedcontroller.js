var App = angular.module('RSSFeedApp');


App.controller("FeedCtrl", ['$scope','FeedService', function ($scope,Feed) {    
	//local helper function
	var addContentImageToFeed = function(feedArray){
		for(var i=0; i < feedArray.length; i++){
			var contentString = feedArray[i].content;
			var src = contentString.match(/src\s*=\s*"(.+?)"/);
			if(src){
				var imageUrl = src[0].substr(5, src[0].length - 6);
				feedArray[i].image = imageUrl;
			}else{
			 	feedArray[i].image = "171.jpg";
			}
		}
	}



	$scope.loadButonText="Load";

	$scope.loadFeed=function(e){        
		Feed.parseFeed($scope.feedSrc).then(function(res){
			$scope.loadButonText=angular.element(e.target).text();
			$scope.feeds=res.data.responseData.feed.entries;
			addContentImageToFeed($scope.feeds);

			// for(var i=0; i < $scope.feeds.length; i++){
			// 	var str = $scope.feeds[i].content;
			// 	var src = str.match(/src\s*=\s*"(.+?)"/);
			// 	if(src){
			// 		var image = src[0].substr(5, src[0].length - 6);
			// 		$scope.feeds[i].image = image;
			// 	}else{
			// 	 	$scope.feeds[i].image = "171.jpg";
			// 	}
			// }
        	console.log($scope.feeds);
		});
		
	};


}]);