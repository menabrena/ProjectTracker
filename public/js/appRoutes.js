angular.module('appRoutes', ["ui.router"])
    .config(function ($stateProvider,$locationProvider,$urlRouterProvider) {

        $urlRouterProvider.otherwise('/404');

        $stateProvider
            .state('home',{
                url: '/',
                views: {
                    navbar: {
                        templateUrl: 'views/general/navbar.html'
                    },
                    content: {
                        templateUrl: 'views/home/content.html',
                        controller: 'homeCtrl',
                        controllerAs: 'vm'
                    },
                    footer: {
                        templateUrl: 'views/general/footer.html'
                    }
                },
                params: {
                    toSection:null
                }
            })

            .state('track-project', {
                url: '/track-project',
                views: {
                    navbar: {
                        templateUrl: 'views/general/navbar.html'
                    },
                    content: {
                        templateUrl: 'views/home/track-project.html',
                        controller: 'trackProjectCtrl',
                        controllerAs: 'vm'
                    },
                    footer: {
                        templateUrl: 'views/general/footer.html'
                    }
                },
            })

        ;

        $locationProvider.html5Mode(true);
    })
;
