var App = angular.module('RSSFeedApp');


App.factory('FeedService',['$http',function($http){

	//tsites can be put in a db later
	var sites = [
		{
			name:'Philippine Entertainment Portal',
			rssUrl:'http://www.pep.ph/rss/pep_newsfeed.php',
			hemisphere: 'eastern'
		},
		{
			name:'Pinoy Gossip Boy',
			rssUrl:'http://pinoygossipboy.net/feed/',
			hemisphere: 'eastern'
		},
        {
            name: 'Whatsikat Showbis Tsimis',
            rssUrl: 'http://feeds2.feedburner.com/WhatsikatChismis',
            hemisphere: 'eastern'
        },
        {
            name: 'Pinoy Showbiz Daily',
            rssUrl: 'http://pinoyshowbizdaily.blogspot.com/feeds/posts/default',
            hemisphere: 'eastern'
        }
	];

    return {
        parseFeed : function(url){
            return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
        },

       	getSites : function(){
			return sites;
		},

		getSources : function(){
			var sourcesArray = [];
			for(var i=0; i< sites.length; i++){
				sourcesArray.push(sites[i].rssUrl);
			}
			return sourcesArray;
		}
    }
}]);