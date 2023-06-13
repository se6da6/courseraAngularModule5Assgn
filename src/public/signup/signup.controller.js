// signup.controller.js
(function () {
    'use strict';
  
    angular.module('public')
      .controller('SignupController', SignupController);
  
    SignupController.$inject = ['$http'];
    function SignupController($http) {
      var signupCtrl = this;
      signupCtrl.user = {};
      signupCtrl.showMessage = false;
      signupCtrl.message = '';
  
      signupCtrl.submitForm = function (isValid) {
        if (isValid) {
          var menuNumber = signupCtrl.user.favoriteMenuNumber;
          var url = 'https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/' + menuNumber.charAt(0) + '/menu_items/' + menuNumber.charAt(1) + '.json';
          
          $http.get(url)
            .then(function (response) {
              if (response.data !== null) {
                // Valid menu number, save user's preference and display success message
                // Save the user's preference using a service or other means
                signupCtrl.showMessage = true;
                signupCtrl.message = 'Your information has been saved.';
              
            } else {
                // Invalid menu number, display error message
                signupCtrl.showMessage = true;
                signupCtrl.message = 'No such menu number exists.';
              }
            })
            .catch(function (error) {
              console.log(error);
              // Handle error if necessary
            });
        }
      };
    }
  })();
  