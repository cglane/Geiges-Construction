// how to use
//link directive js file and css file to index.html
//insert tag <overlapping-slides> into your html file and
//configure file by specifying 'album' address and 'width' of individual images


(function () {
  "use strict";
  angular
    .module('main')
    .directive('overlappingSlides', function () {
      return {
        restrict: 'EA',
         scope: {},
        transclue: true,
        templateUrl: './public/directives/overlappingSlides/slide.html',
        link: function (scope, element, attributes) {
          var album = attributes.album;
          var myWidth = attributes.width + 'px';
          var picScale = attributes.scale.split('-');
              //createAlbum
                scope.album = [];
                for (var i = picScale[0]; i < picScale[1]; i++) {
                  var currPic = album+'/'+'IMG_'+i+'.jpg';
                    scope.album.push(currPic);
                  }
                  //change css features
                  scope.width = myWidth;
                  scope.overlapp = parseInt(attributes.width) / 1.5;
                  //animate hover
                  

        }
      };
    });

})();
