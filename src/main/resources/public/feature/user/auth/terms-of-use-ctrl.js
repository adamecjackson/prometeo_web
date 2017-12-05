"use strict";
angular.module("pamm").controller("userTermsOfUseCtrl", ["$state", "$log", "legalRefData",
    function ($state, $log, legalRefData) {
        var vm = this;

        (function init() {
            vm.termsAndConditionsHeading = legalRefData.TERMS_OF_USE.heading;
            vm.termsAndConditionsBody = legalRefData.TERMS_OF_USE.body;
        })();

        vm.back = function () {
            $state.go("user.auth.login");
        }
    }]);
