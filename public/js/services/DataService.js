angular.module('newApp').service('data',data);

data.$inject= ['$http','$window','$rootScope','$q'];

function data($http,$window,$rootScope,$q){

    var getProjects = function() {
        return $http.get('/api/projects')
    }

    var createNotification = function(data) {
        return $http.post('/api/notification', data)
    }

    var getNotifications = function () {
        return $http.get('/api/notification')
    }

    return{
        getProjects : getProjects,
        createNotification: createNotification,
        getNotifications : getNotifications
    };
}