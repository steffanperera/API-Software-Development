// desc:    register new user
// route:   POST /api/users
// access:  public
const registerUser = (req, res) => {
  res.json({ message: "Register user" })
}

// desc:    login a user
// route:   POST /api/users/login
// access:  public
const loginUser = (req, res) => {
  res.json({ message: "login user" })
}

// desc:    get user data
// route:   GET /api/users/me
// access:  public
const getUser = (req, res) => {
  res.json({ message: "user data" })
}

module.exports = {
  registerUser,
  loginUser,
  getUser,
}
