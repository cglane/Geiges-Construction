(function () {
  "use strict";

  var underscore = angular.module('underscore', []);
          underscore.factory('_', function() {
              return window._;
          });
  var jquery = angular.module('jquery', []);
          jquery.factory('$', function() {
          return window.$;
        });


  angular
    .module('main', [
      'ngRoute',
      'ui.router',
      'underscore',
      'jquery',

    ])

    .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider

          // HOME STATES AND NESTED VIEWS ========================================
          .state('landing', {
              url: '/',
              controller:'MainController',
              templateUrl: 'public/main/views/landing.html'
          })
          .state('main', {
              url: '/main',
              controller:'MainController',
              templateUrl: 'public/main/views/main.html'
          })
    //       .state('contact', {
    //           url: '/contact',
    //           controller:'ContactController',
    //           templateUrl: 'contact/views/contact.html'
    //       })
    // //
    // //       // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
    //       .state('pics.expanded', {
    //         url: '/extended/:album/:typePic',
    //         controller:'PicsController',
    //         templateUrl: 'pics/views/expanded.html',
    //       })
    //       .state('pics.carousel', {
    //         url: '/carousel/:album/:startLocation',
    //         controller:'CarouselController',
    //         templateUrl: 'pics/views/carousel.html',
    //       })
    //
    // // nested list with just some random string data
    // .state('home.paragraph', {
    //     url: '/paragraph',
    //     controller:'MainController',
    //     templateUrl: 'main/views/viewCards.html'
    // })


  });





})();
