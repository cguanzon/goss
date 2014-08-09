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
			name: 'Pinow Showbiz',
			rssUrl: 'http://pinoyshowbiz.wordpress.com/feed/',
			hemisphere: 'eastern'
		},
		{
			name: 'The Pulse',
			rssUrl: 'http://thepulse.ph/feed/',
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