const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const Officer = require("../models/officerModel")

// get officers => GET /api/officers
const getOfficers = asyncHandler(async (req, res) => {
  const officers = await Officer.find()

  res.status(200).json(officers)
})

// register officer => POST /api/officers
const registerOfficer = asyncHandler(async (req, res) => {
  const { officer_id, password } = req.body

  if (!officer_id || !password) {
    res.status(400)
    throw new Error("please add all fields!")
  }

  const officerExists = await Officer.findOne({ officer_id })

  if (officerExists) {
    res.status(400)
    throw new Error("officer already exists!")
  }

  // hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // create company
  const officer = await Officer.create({
    officer_id,
    password: hashedPassword,
  })

  if (officer) {
    res.status(201).json({
      msg: "officer registered!",
      _id: officer.id,
      officer_id: officer.officer_id,
    })
  } else {
    res.status(400)
    throw new Error("invalid officer data!")
  }
})

// authenticate officer => POST /api/citizens/login
const loginOfficer = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "login officer!" })
})

module.exports = { getOfficers, registerOfficer, loginOfficer }
