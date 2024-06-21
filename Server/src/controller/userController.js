const { request, response } = require("express");
const UserModel = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// for new user
const registerController = async (request, response) => {
  try {
    const existUser = await UserModel.findOne({
      username: request.body.username,
    });

    if (existUser) {
      response.status(403).json({
        status: "faild",
        message: "User already exist please create with another username",
      });
    }

    const password = request.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    request.body.password = hashPassword;
    const newUser = new UserModel({ ...request.body, password: hashPassword });
    const data = await newUser.save();
    response.status(200).send({
      status: "ok",
      message: "new user register successfully",
      data: data,
    });
  } catch (error) {
    console.log("error while the call register api ", error);
  }
};
const loginController = async (request, response) => {
  try {
    const usename = request.body.username;
    const password = request.body.password;
    console.log(
      "usernameeeeeeeeeeeeee",
      usename,
      "+",
      "passwordpassword",
      password
    );
    const userData = await UserModel.findOne({ username: usename });

    if (!userData) {
      response.status(401).send({
        status: "ok",
        message: "User not found",
        data: userData,
      });
    }

    const isMatch = await bcrypt.compare(password, userData.password);
    if (!isMatch) {
      response.status(400).send({
        status: "faild",
        message: "username Or Password invalid",
      });
    }

    const token = jwt.sign({ id: userData._id }, process.env.SECRET_KEY, {
      expiresIn: process.env.TOKEN_TIME,
    });
    const data = {
      _id: userData._id,
      username: userData.username,
      token: token,
      createdOn: userData.createdOn,
    };
    response.status(200).send({
      status: "ok",
      message: "Authenticated",
      messageDetail: "User has been successfully authenticated",
      data: data,
    });
  } catch (error) {
    console.log("Error when the call loginController", error);
  }
};

const authController = async (request, response) => {
  try {
    const { _id } = request.body; 
        if (!_id) {
          return response.status(400).send({
            status: "failed",
            message: "_id parameter is missing",
          });
        }
    const user = await UserModel.findOne({ _id });
    if (!user) {
      return response.status(401).send({
        status: "failed",
        message: "user not found",
      });
    } else {
      response.status(200).send({
        status: "ok",
        message: "user getting successfully",
        data: {
          name: user.username,
        },
      });
    }
  } catch (error) {
    console.log("Error While the Call authController", error);
    response.status(500).send({
      status: "faild",
      message: "auth error",
    });
  }
};

module.exports = { registerController, loginController, authController };
