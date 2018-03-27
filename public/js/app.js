angular
    .module('newApp',
        [
            'ngMaterial',
            'ui.router',
            'appRoutes',
            'ngMessages',
            'ngToast'
        ])
    .config(['$httpProvider', function($httpProvider){
        $httpProvider.interceptors.push(['$q', '$location', '$window', function($q, $location, $window) {
            return {
                'request': function (config) {
                    config.headers = config.headers || {};
                    if ($window.localStorage['gb-token']) {
                        config.headers.Authorization = 'Bearer ' + $window.localStorage['gb-token'];
                    }
                    return config;
                },
                'responseError': function(response) {
                    if(response.status === 401 || response.status === 403) {
                        console.log("You are unathorized to access that route");
                    }
                    return $q.reject(response);
                }
            };
        }]);
    }]);

