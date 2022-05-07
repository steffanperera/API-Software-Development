const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const Citizen = require("../models/citizenModel")

// get citizens => GET /api/citizens
const getCitizens = asyncHandler(async (req, res) => {
  const citizens = await Citizen.find()

  res.status(200).json(citizens)
})

// register citizen => POST /api/citizens
const registerCitizen = asyncHandler(async (req, res) => {
  const { name, username, email, password } = req.body

  if (!name || !username || !email || !password) {
    res.status(400)
    throw new Error("please add all fields!")
  }

  const citizenExists = await Citizen.findOne({ name })

  if (citizenExists) {
    res.status(400)
    throw new Error("citizen already exists!")
  }

  // hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // create citizen
  const citizen = await Citizen.create({
    name,
    username,
    email,
    password: hashedPassword,
  })

  if (citizen) {
    res.status(201).json({
      msg: "citizen registered!",
      _id: citizen.id,
      name: citizen.name,
      username: citizen.username,
      email: citizen.email,
    })
  } else {
    res.status(400)
    throw new Error("invalid citizen data!")
  }
})

// authenticate citizen => POST /api/citizens/login
const loginCitizen = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "login company!" })
})

// remove citizen => DELETE /api/citiaens/:id
const removeCitizen = asyncHandler(async (req, res) => {
  const citizen = await Citizen.findById(req.params.id)

  if (!citizen) {
    res.status(400)
    throw new Error("citizen not found!")
  }

  await citizen.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = { getCitizens, registerCitizen, loginCitizen, removeCitizen }
