'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the angularTestApp
 */
angular.module('angularTestApp')
  .controller('EventsCtrl', function ($scope, $http) {
    $('.spin').spin();
		
		var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%20%3D%20"http%3A%2F%2Fwww.multigp.com%2Fmgp%2Fmultigp%2Fchapter%2Frss%2Fname%2FAuroraFPV%2F"&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&_maxage=3600';

		$http.get(url).then(function(response) {
        $scope.feed = {
          title: 'Events',
          items: response.data.query.results.rss.channel.item
        };
				$('.spin').hide();
      }, function(errorResponse) {
        console.error('Error fetching feed:', errorResponse.statusText);
      });

		 /*
      $('#rss-feeds').rss('http://www.multigp.com/multigp/chapter/rss/name/AuroraFPV', {
         limit: 10,
         dateFormat: 'MMM Do',
         entryTemplate: '<a class="list-group-item" href="{url}"> <h3 class="list-group-item-heading">{title}</h3> <p class="list-group-item-text text-muted small">{shortBodyPlain}</p> </a>',
      }, function() {
         $('.spin').hide();
      });
			*/
  });
