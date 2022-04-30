const express = require("express")
const router = express.Router()
const { registerUser, loginUser, getUser } = require("../controllers/userController")

// register new user
router.post("/", registerUser)

// login user
router.post("/login", loginUser)

// get user data
router.get("/me", getUser)

module.exports = router
