angular.module('newApp').controller('trackProjectCtrl', trackProjectCtrl);
trackProjectCtrl.$inject = ['$rootScope','data','ngToast'];

function trackProjectCtrl($rootScope, data, ngToast) {

    var vm = this;

    vm.init = function() {

        vm.projects = [];

        setInitialData();

        data.getProjects().then(
            function success(res) {
                console.log(res.data)
                vm.projects = res.data.projects;
            },
            function error(res) {
                ngToast.warning(res.data)
            }
        )

        getNotifications();

    }();

    function setInitialData() {
        vm.data = {
            projectID: "",
            budget: "",
            percentage: "",
            projectName: "",
            emails: "",
        }
    }

    function getNotifications() {
        data.getNotifications().then(
            function success(res) {
                console.log(res.data)
                vm.notifications = res.data;
            },
            function error(res) {
                ngToast.warning(res.data)
                console.log(res.data)
            }
        )
    }

    vm.submit = function () {
        validateData();

        data.createNotification(vm.data).then(
            function success(res) {
                console.log(res.data)
                ngToast.info("Success creating notification")
                getNotifications()
            },
            function error(res) {
                //console.error(res.data)
                ngToast.warning(res.data)
            }
        )

        setInitialData()
    }
    
    function validateData() {

        // Clean emails
        if(typeof vm.data.emails == 'string') {
            vm.data.emails = vm.data.emails.split(",");
            for(var i = 0; i < vm.data.emails.length; i++) {
                vm.data.emails[i] = vm.data.emails[i].replace(/\s/g,'');
            }
        }

        // Get project name
        for(var i = 0; i < vm.projects.length; i++) {
            if(vm.projects[i].id == vm.data.projectID) {
                vm.data.projectName = vm.projects[i].name
            }
        }

    }

}
