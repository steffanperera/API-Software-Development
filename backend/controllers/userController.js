const asyncHandler = require("express-async-handler")

// desc:    get users
// route:   GET /api/users
// access:  private
const getUsers = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get users" })
})

// desc:    set user
// route:   POST /api/users
// access:  private
const setUser = asyncHandler(async (req, res) => {
  // code - error handling
  if (!req.body.text) {
    res.status(400)
    throw new Error("please add a text feild")
    // express error handler
  }

  res.status(200).json({ message: "set user" })
})

// desc:    update goal
// route:   PUT /api/goals/:id
// access:  private
const updateUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update user ${req.params.id}` })
})

// desc:    delete goals
// route:   DELETE /api/goals/:id
// access:  private
const deleteUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete user ${req.params.id}` })
})

module.exports = {
  getUsers,
  setUser,
  updateUser,
  deleteUser,
}
