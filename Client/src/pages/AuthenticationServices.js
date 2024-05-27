// import axios from "axios";
// import variables from "globals/variables";
// import SIPPhoneService from "application/components/SIPPhone/SIPPhoneService";
// import loggerFactory from "globals/logger/logger-factory";
// const componentName = "AuthenticationService";

const AuthenticationService = {
  storeAuthenticationDetails: function (token, userName) {
    debugger
    window.sessionStorage.setItem(
      `${window.location.hostname}-vishw-Grow-Token`,
      token
    );
    window.sessionStorage.setItem(
      `${window.location.hostname}-vishw-Grow-UserName`,
      userName
    );
  },

  getAuthenticationToken: function () {
    return window.sessionStorage.getItem(
      `${window.location.hostname}-coral-X-Token`
    );
  },

  setUserName: function (userName) {
    return window.sessionStorage.setItem(
      `${window.location.hostname}-coral-X-UserName`,
      userName
    );
  },
  getUserName: function () {
    return window.sessionStorage.getItem(
      `${window.location.hostname}-coral-X-UserName`
    );
  },

  logout: function () {
    window.sessionStorage.setItem(
      `${window.location.hostname}-coral-X-User`,
      ""
    );
    window.sessionStorage.setItem(
      `${window.location.hostname}-coral-X-Token`,
      ""
    );
  },

  //   login: function (userName, password) {
  //     window.sessionStorage.setItem(
  //       `${window.location.hostname}-coral-X-User`,
  //       userName
  //     );
  //     return axios.post(variables.app.services + "auth/login", {
  //       username: userName,
  //       password: password,
  //     });
  //   },
};

export default AuthenticationService;
