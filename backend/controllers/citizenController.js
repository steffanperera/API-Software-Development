const asyncHandler = require("express-async-handler")
const Citizen = require("../models/citizenModel")

// desc:    get citizens
// route:   GET /api/citizens
const getCitizens = asyncHandler(async (req, res) => {
  const citizens = await Citizen.find()

  res.status(200).json(citizens)
})

// desc:    create citizen
// route:   POST /api/citizens
const registerCitizen = asyncHandler(async (req, res) => {
  const { nic, password, name, age, address, email, phone, qualifications } = req.body

  if (!nic || !password || !name || !age || !address || !email || !phone) {
    res.status(400)
    throw new Error("please add all fields!")
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

// desc:    authenticate citizen
// route:   POST /api/citizens/login
const loginCitizen = asyncHandler(async (req, res) => {
  const { nic, password } = req.body

  const citizen = await Citizen.findOne({ nic })

  if (citizen && password) {
    res.json({
      _id: citizen.id,
      name: citizen.name,
      email: citizen.email,
    })
  } else {
    res.status(400)
    throw new Error("invalid credentials!")
  }

  res.json({ message: "citizen authenticated!" })
})

// desc:    add qualifications
// route:   POST /api/citizens/:id
const addQualifications = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error("please add qualifications!")
  }

  const citizen = await Citizen.create({
    text: req.body.text,
    citizen: req.citizen.nic,
  })

  res.status(200).json(citizen)
})

module.exports = {
  getCitizens,
  registerCitizen,
  loginCitizen,
  addQualifications,
}
