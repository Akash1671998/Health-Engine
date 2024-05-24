const express = require("express");
const { loginController } = require("../controller/userController");
const { registerController } = require("../controller/userController");

const router = express.Router();

// for all user
router.post("/register", registerController);
router.post("/login", loginController);

module.exports = router;
