'use strict';

/**
 * @ngdoc function
 * @name gossApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gossApp
 */
angular.module('gossApp')
  .controller('MainCtrl', function ($scope, MainService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.siteHeading = 'Latest Scoop';
    $scope.sources = MainService.getSources();
    $scope.sites = MainService.getSites();


    //local helper function
    var addContentImageToFeed = function(feedArray){
        for(var i=0; i < feedArray.length; i++){
            var contentString = feedArray[i].content;
            var src = contentString.match(/src\s*=\s*"(.+?)"/);
            if(src){
                var imageUrl = src[0].substr(5, src[0].length - 6);
                feedArray[i].image = imageUrl;
            }else{
                feedArray[i].image = "http://ahappylass.files.wordpress.com/2013/02/gossip.jpg";
            }
        }
    }

    $scope.loadFeed=function(site){
        $scope.siteHeading = site.name;
        MainService.parseFeed(site.rssUrl).then(function(res){
            $scope.feeds=res.data.responseData.feed.entries;
            addContentImageToFeed($scope.feeds);
        });
    };

    $scope.loadInitial=function(){
        $scope.feeds = [];
        for(var i = 0; i < $scope.sources.length; i++){
            MainService.parseFeed($scope.sources[i]).then(function(res){
                var feedEntries = res.data.responseData.feed.entries;
                for(var i=0; i<2; i++){
                    $scope.feeds.push(feedEntries[i]);
                }
                addContentImageToFeed($scope.feeds);
            });
        }
    }
    $scope.loadInitial();
    });
