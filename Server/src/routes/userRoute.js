const express = require("express");
const { loginController, authController } = require("../controller/userController");
const { registerController } = require("../controller/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// for all user
router.post("/register", registerController);
router.post("/login", loginController);

router.post("/getUserData",authMiddleware,authController)

module.exports = router;
