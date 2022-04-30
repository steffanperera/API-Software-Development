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
  const { nic, password, name, age, address, email, phone } = req.body

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
// route:   put /api/citizens/id
const addQualifications = asyncHandler(async (req, res) => {
  const { qualifications } = req.body

  if (!qualifications) {
    res.status(400)
    throw new Error("please add qualifications!")
  }

  const citizen = await Citizen.updateOne({
    qualifications: req.body.qualifications,
  })

  res.status(200).json(citizen)
})

// desc:    add documents
// route:   put /api/citizens/id
const addDocuments = asyncHandler(async (req, res) => {
  const { birth_certificate, cv, passport_copy } = req.body

  if (!birth_certificate || !cv || !passport_copy) {
    res.status(400)
    throw new Error("please add relevent documents!")
  }

  const citizen = await Citizen.updateOne({
    birth_certificate: req.body.birth_certificate,
    cv: req.body.cv,
    passport_copy: req.body.passport_copy,
  })

  res.status(200).json(citizen)
})

module.exports = {
  getCitizens,
  registerCitizen,
  loginCitizen,
  addQualifications,
  addDocuments,
}
