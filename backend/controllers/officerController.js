const asyncHandler = require("express-async-handler")
const Officer = require("../models/officerModel")

// desc:    get officers
// route:   GET /api/officers
const getOfficers = asyncHandler(async (req, res) => {
  const officers = await Officer.find()

  res.status(200).json(officers)
})

// desc:    create officer
// route:   POST /api/officers
const registerOfficer = asyncHandler(async (req, res) => {
  const { officer_id, password } = req.body

  if (!officer_id || !password) {
    res.status(400)
    throw new Error("please add all fields")
  }

  const officer = await Officer.create({
    officer_id: req.body.officer_id,
    password: req.body.password,
  })

  res.status(200).json(officer)
})

// desc:    authenticate officer
// route:   POST /api/officers/login
const loginOfficer = asyncHandler(async (req, res) => {
  const { officer_id, password } = req.body

  const officer = await Officer.findOne({ officer_id })

  if (officer && password) {
    res.json({
      _id: officer.id,
      officer_id: officer.officer_id,
    })
  } else {
    res.status(400)
    throw new Error("invalid credentials!")
  }

  res.json({ message: "officer authenticated!" })
})

module.exports = {
  getOfficers,
  registerOfficer,
  loginOfficer,
}
