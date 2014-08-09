var App = angular.module('RSSFeedApp');

App.service('FeedService',['$http',function($http){
	//tsites can be put in a db later
	var sites = [
		{
			name: 'TMZ',
			rssUrl: 'http://www.tmz.com/rss.xml',
			hemisphere: 'western'
		},
		{
			name: 'E! NEWS',
			rssUrl: 'http://www.eonline.com/syndication/feeds/rssfeeds/topstories.xml'
		},
		{
			name:'DailyMail.UK',
			rssUrl:'http://www.dailymail.co.uk/tvshowbiz/index.rss',
			hemisphere: 'western'
		},
		{
			name:'Philippine Entertainment Portal',
			rssUrl:'http://www.pep.ph/rss/pep_newsfeed.php',
			hemisphere: 'eastern'
		},
		{
			name:'Pinoy Gossip Boy',
			rssUrl:'http://pinoygossipboy.net/feed/',
			hemisphere: 'eastern'
		}
	]


	this.getSites = function(){
		return sites;
	};
	this.parseFeed = function(url){
		return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
	};


}]);