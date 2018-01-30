"use strict";

angular.module("todoApp").factory("AuthFactory", FBCreds => {
  
  let authObj = {};
  
  authObj.createUser = ({email, password}) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
  };

  authObj.loginUser = ({email, password}) => {
    return firebase.auth().loginWithEmailAndPassword(email, password);
  };

  return authObj;
});
