(function () {
  "use strict";
  angular
    .module('main')
    .directive('loadingDirective', function () {
      return {
        restrict: 'EA',
        transclue: true,
        templateUrl: './public/directives/loading/loading.html',
        link: function (scope, element, attributes) {
          //set view css features according to width
          var screenWidth = window.innerWidth + 'px';
          var screenHeight = window.innerHeight + 'px';
          var heightInt = window.innerHeight;

          $('.kraken').css('width',screenWidth)
          $('.kraken').css('height',screenHeight);
          //check for resize
          $( window ).resize(function() {
          var screenWidth = window.innerWidth + 'px';
          var screenHeight = window.innerHeight + 'px';
            $('.kraken').css('width',screenWidth)
            $('.kraken').css('height',screenHeight);
          });

          //type text function
          var typeText = function(string,tag,time){
            //set current place of string,
            var currIndex = 1;
            var innerHtml = string[0];
            //adding first char to dom
            $(tag).html(string[0])
            console.log(string.length)
            //setting interval addding more characters if more characters exist
              setInterval(function () {
                if(currIndex <  string.length){
                $(tag).html(innerHtml+string[currIndex]);
                innerHtml = innerHtml + string[currIndex];
                console.log(innerHtml)
                currIndex++;
              }
              }, time);
            }

            scope.showAnchor = function(){
              console.log('hello')
            }
            //animate page
            var runAnimation = function(){
              $('.one p').stop(true,false).animate({
                'height':'300px'
              },0);
              $('.one p').stop(true,false).animate({
                'width':'30%'
              },1500);
              typeText('Geiges Constuction Company',"#one",100)
              // set first animation
              setTimeout(function () {
                $('.page-wrapper').stop(true,false).animate({
                  'top':'-='+screenHeight
                },500);
                typeText('He likes to Build',"#two",100)

              }, 4000);
              //second animation
              setTimeout(function () {
                $('.page-wrapper').stop(true,false).animate({
                  'top':'-='+screenHeight
                },500);
                typeText('He likes to Build',"#three",100)

              }, 8000);
              //third animation
              setTimeout(function () {
                $('.page-wrapper').stop(true,false).animate({
                  'top':'-='+screenHeight
                },500);
                $('.four a').stop(true,false).animate({
                  'opacity':'1'
                },500);
                typeText('He likes to Build',"#four",100);
              }, 12000);
            }
            runAnimation();
            //content and text animation
            // var content = {one:'He builds stuff',two:'he likes stuff alot'}
            // for(var item in content){
            //   typeText(content[item],"#"+item,1000);
            // }


        }
      };
    });

})();
