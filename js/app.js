var app = angular.module("app", ['ui.router', 'ngMaterial']);

app.config(function($stateProvider, $urlRouterProvider){

  // For any unmatched url, send to /route1
  $urlRouterProvider.otherwise("/route1")

  $stateProvider
        .state('index', {
            url: "",
            views: {
                "view": {
                    template: "index.view"
                }
            }
        })
        .state('route1', {
            url: "/route1",
            views: {
                "view": {
                    template: "route1.view"
                }
            }
        })
        .state('route3', {
            url: "/route3",
            views: {
                "view": {
                    template: "route3.view"
                }
            }
        })
        .state('route4', {
            url: "/route4",
            views: {
                "view": {
                    template: "route4.view"
                }
            }
        })
        .state('route5', {
            url: "/route5",
            views: {
                "view": {
                    template: "route5.view"
                }
            }
        })
        .state('route6', {
            url: "/route6",
            views: {
                "view": {
                    template: "route6.view"
                }
            }
        })
        .state('route7', {
            url: "/route7",
            views: {
                "view": {
                    template: "route7.view"
                }
            }
        })
        .state('route8', {
            url: "/route8",
            views: {
                "view": {
                    template: "route8.view"
                }
            }
        })
        .state('route9', {
            url: "/route9",
            views: {
                "view": {
                    template: "route9.view"
                }
            }
        })
});

////////////////////////////////////////////////////////////////////////////////
// Main controller
////////////////////////////////////////////////////////////////////////////////
app.controller("MainController", function($scope){

});
