// import axios from "axios";
// import variables from "globals/variables";
// import SIPPhoneService from "application/components/SIPPhone/SIPPhoneService";
// import loggerFactory from "globals/logger/logger-factory";
// const componentName = "AuthenticationService";

const AuthenticationService = {
  storeAuthenticationDetails: function (token, userName) {
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
      `${window.location.hostname}-vishw-Grow-Token`
    );
  },

  setUserName: function (userName) {
    return window.sessionStorage.setItem(
      `${window.location.hostname}-vishw-Grow-UserName`,
      userName
    );
  },
  getUserName: function () {
    return window.sessionStorage.getItem(
      `${window.location.hostname}-vishw-Grow-UserName`
    );
  },

  logout: function () {
    window.sessionStorage.setItem(
      `${window.location.hostname}-vishw-Grow-User`,
      ""
    );
    window.sessionStorage.setItem(
      `${window.location.hostname}-vishw-Grow-Token`,
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
