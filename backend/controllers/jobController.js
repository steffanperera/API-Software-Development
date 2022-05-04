const asyncHandler = require("express-async-handler")

// get jobs => GET /api/jobs
const getJobs = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get jobs!" })
})

// post jobs => POST /api/jobs
const postJobs = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error("please add a text field!")
  }

  res.status(200).json({ message: "post job!" })
})

// update job => PUT /api/jobs/:id
const updateJobs = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update job! ${req.params.id}` })
})

// delete job => DELETE /api/jobs/:id
const deleteJobs = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete job! ${req.params.id}` })
})

module.exports = { getJobs, postJobs, updateJobs, deleteJobs }
