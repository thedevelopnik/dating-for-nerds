(function() {

  'use strict';

  angular.module('gDating').directive('landing', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/browse/browse.view.html',
      controller: function($scope, memberRequests) {
        
      }
    }
  });

})();