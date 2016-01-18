'use strict';

const ACCOUNT_CMD_HOST = 'http://ACCOUNT_CMD_IP:ACCOUNT_CMD_PORT/';
const ACCOUNT_QUERY_HOST = 'http://ACCOUNT_QUERY_IP:ACCOUNT_QUERY_PORT/';
const ACCOUNT_TRANSFER_HOST = 'http://ACCOUNT_TRANSFER_IP:ACCOUNT_TRANSFER_PORT/';

var AngularSpringApp = {};

var App = angular.module('AngularSpringApp', ['ngRoute', 'autocomplete', 'AngularSpringApp.filters', 'AngularSpringApp.services', 'AngularSpringApp.directives']);

// Declare app level module which depends on filters, and services
App.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/accounts', {
        templateUrl: 'accounts/layout.html',
        controller: AccountsController
    });

    $routeProvider.otherwise({redirectTo: '/accounts'});
}]);
