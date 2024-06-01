const { response } = require("express");
const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    if (!token) {
      return res.status(403).send({
        status: "failed",
        message: "Authorization header missing",
      });
    }

    jwt.verify(token, process.env.SECRET_KEY, (error, decode) => {
      if (error) {
        return response.status(500).send({
          status: "faild",
          message: "Please given the auth token",
        });
      } else {
        req.body.userId = decode.id;
        next();
      }
    });
  } catch (error) {
    console.log("Error While the call api", error);
    response.status(401).send({
        status:'faild',
        message:'Authentication Faild'
    })
  }
};
