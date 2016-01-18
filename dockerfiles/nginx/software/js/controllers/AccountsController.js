'use strict';

var AccountsController = function ($scope, $http) {

    $scope.addNewAccount = function (newItem) {
        $scope.resetError();

        $http.post(ACCOUNT_CMD_HOST + 'accounts', newItem).success(function (result) {
            $scope.account.initialBalance = '';

            $scope.setSuccess("Account created with id: " + result.accountId);
        }).error(function () {
            $scope.setError('Could not add a new account');
        });
    };

    $scope.queryAccount = function (account) {
        $scope.resetError();

        $http.get(ACCOUNT_QUERY_HOST + 'accounts/' + account.accountId).success(function (result) {
            $scope.setSuccess("Account " + result.accountId + " has balance: " + result.balance);
        }).error(function () {
            $scope.setError('Account not found');
        });
    };

    $scope.doTransfer = function (transfer) {
        $scope.resetError();

        $http.post(ACCOUNT_TRANSFER_HOST + 'transfers', transfer).success(function (result) {
            $scope.setSuccess("Transfer has been successful. RefId: " + result.moneyTransferId);
        }).error(function () {
            $scope.setError('Transfer has not been successful');
        });
    };

    $scope.resetNamesForm = function () {
        $scope.resetError();
        $scope.names = {};
        $scope.search = '';
        $scope.editMode = false;
    };

    $scope.resetError = function () {
        $scope.success = false;
        $scope.successMessage = '';

        $scope.error = false;
        $scope.errorMessage = '';
    };

    $scope.setSuccess = function (message) {
        $scope.success = true;
        $scope.successMessage = message;
    };

    $scope.setError = function (message) {
        $scope.error = true;
        $scope.errorMessage = message;
    };

    //$scope.fetchAccounts();

    $scope.predicate = 'accountId';
};