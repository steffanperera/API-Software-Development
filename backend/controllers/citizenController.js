const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const asyncHandler = require("express-async-handler")
const Citizen = require("../models/citizenModel")

// desc:    get citizens
// route:   GET /api/citizens
const getCitizens = asyncHandler(async (req, res) => {
  const citizens = await Citizen.find()

  res.status(200).json(citizens)
})

// desc:    create user
// route:   POST /api/citizens
const registerCitizen = asyncHandler(async (req, res) => {
  const { nic, password, name, age, address, email, phone } = req.body

  if (!nic || !password || !name || !age || !address || !email || !phone) {
    res.status(400)
    throw new Error("please add all fields")
  }

  const citizen = await Citizen.create({
    nic: req.body.nic,
    password: req.body.password,
    name: req.body.name,
    age: req.body.age,
    address: req.body.address,
    email: req.body.email,
    phone: req.body.phone,
  })

  res.status(200).json(citizen)
})

module.exports = {
  getCitizens,
  registerCitizen,
}
