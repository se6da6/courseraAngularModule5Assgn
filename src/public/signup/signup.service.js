// signup.service.js
(function () {
    'use strict';
  
    angular.module('public')
      .service('SignupService', SignupService);
  
   
    function SignupService() {
        var service = this;
        var user = {};
        var favoriteMenuItem = {};
    
        service.saveUser = function (userData) {
            user = userData;
        };
    
        service.getUser = function () {
            return user;
        };
    
        service.saveFavoriteMenuItem = function (menuItem) {
            favoriteMenuItem = menuItem;
        };
    
        service.getFavoriteMenuItem = function () {
            return favoriteMenuItem;
        };
    
        service.isRegistered = function () {
            return Object.keys(user).length !== 0;
        };
    }
})();