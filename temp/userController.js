const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const asyncHandler = require("express-async-handler")
const User = require("./userModel")

// desc:    register new user
// route:   POST /api/users
// access:  public
const registerUser = asyncHandler(async (req, res) => {
  const { nic, password, name, age, address, email, phone } = req.body

  if (!nic || !password || !name || !age || !address || !email || !phone) {
    res.status(400)
    throw new Error("please add all fields")
  }

  const userExists = await User.findOne({ nic })

  if (userExists) {
    res.status(400)
    throw new Error("user already exist")
  }

  res.json({ message: "Register user" })
})

// desc:    authenticate a user
// route:   POST /api/users/login
// access:  public
const loginUser = asyncHandler(async (req, res) => {
  const { nic, password } = req.body

  // check user nic
  const user = await User.findOne({ nic })

  if (user && password) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
    })
  } else {
    res.status(400)
    throw new Error("invalid credentials!")
  }

  res.json({ message: "login user" })
})

// desc:    get user data
// route:   GET /api/users/me
// access:  public
const getUser = asyncHandler(async (req, res) => {
  res.json({ message: "user data" })
})

module.exports = {
  registerUser,
  loginUser,
  getUser,
}