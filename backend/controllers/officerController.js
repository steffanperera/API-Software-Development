const asyncHandler = require("express-async-handler")

// desc:    get officers
// route:   GET /api/officers
// access:  private
const getOfficers = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get officers" })
})

// desc:    set officer
// route:   POST /api/officers
// access:  private
const setOfficer = asyncHandler(async (req, res) => {
  // code - error handling
  if (!req.body.text) {
    res.status(400)
    throw new Error("please add a text feild")
    // express error handler
  }

  res.status(200).json({ message: "set officer" })
})

// desc:    update officer
// route:   PUT /api/officers/:id
// access:  private
const updateOfficer = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update officer ${req.params.id}` })
})

// desc:    delete officer
// route:   DELETE /api/officers/:id
// access:  private
const deleteOfficer = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete officer ${req.params.id}` })
})

module.exports = {
  getOfficers,
  setOfficer,
  updateOfficer,
  deleteOfficer,
}
