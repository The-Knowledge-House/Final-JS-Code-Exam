//Hello I am the main app file. I am basically in control of your front end routing and tieing everything together. Please take a look but DO NOT ADJUST. Thank you.

angular.module("examApp", ["ui.router", "examApp.controllers"])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state("index", {
                url: "/",
                templateUrl: "/templates/home.html",
                controller: "mainCtrl"
            })
            .state("getPage", {
                url: "/getting",
                templateUrl: "/templates/get.html",
                controller: "getCtrl"
            })
            .state("postPage", {
                url: "/posting",
                templateUrl: "/templates/post.html",
                controller: "postCtrl"
            })
            .state("updatePage", {
                url: "/update",
                templateUrl: "/templates/edit.html",
                controller: "updateCtrl"
            });

        $urlRouterProvider.otherwise("/")
    })