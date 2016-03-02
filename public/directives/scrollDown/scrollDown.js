(function () {
  "use strict";
  angular
    .module('main')
    .directive('scrollDown', function () {
      return {
        restrict: 'EA',
        transclue: true,
        // templateUrl: './public/directives/scrollDown/scrollDown.html',
        link: function (scope, element, attributes) {
          var wrapper = '.'+attributes.wrapper;
          var scroll = attributes.scroll;

          //intialize y-axis scroll number
            var lastScroll = 0;
            //set scroll eventhandler
            $(window).scroll(function(){
              var st = $(this).scrollTop();
              //compare last location with current location on y-axis
              if(st > lastScroll){
                $(wrapper).stop(true,false).animate({
                  'top':'-='+scroll+'px'
                },500);
              }else{
                $(wrapper).stop(true,false).animate({
                  'top':'+='+scroll+'px'
                },500);
              }
              //set lastScroll variable to current y-axis
              lastScroll = st;


            })
        }
      };
    });

})();
