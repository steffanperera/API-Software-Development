const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const Citizen = require("../models/citizenModel")

// get citizens => GET /api/citizens
const getCitizens = asyncHandler(async (req, res) => {
  const citizens = await Citizen.find()

  res.status(200).json(citizens)
})

// get by nic => GET /api/citizens/:nic
const citizenByNIC = asyncHandler(async (req, res) => {
  const citizen = await Citizen.find({ nic: req.params.nic })

  if (!citizen) {
    res.status(400)
    throw new Error("citizen not found")
  }

  res.status(200).json(citizen)
})

// register citizen => POST /api/citizens
const registerCitizen = asyncHandler(async (req, res) => {
  const { name, nic, address, phone, username, email, password } = req.body

  if (!name || !nic || !address || !username || !email || !password) {
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
    nic,
    address,
    phone,
    username,
    email,
    password: hashedPassword,
  })

  if (citizen) {
    res.status(201).json({
      message: "citizen registered!",
      _id: citizen.id,
      name: citizen.name,
      nic: citizen.nic,
      address: citizen.address,
      phone: citizen.phone,
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
  const { username, password } = req.body

  // check for citizen username
  const citizen = await Citizen.findOne({ username })

  if (citizen && (await bcrypt.compare(password, citizen.password))) {
    res.json({
      message: "citizen authenticated!",
      _id: citizen.id,
      nic: citizen.nic,
      name: citizen.name,
    })
  } else {
    res.status(400)
    throw new Error("invalid citizen credentials!")
  }
})

// add qualification => PUT /api/citizens/:nic
const addQualif = asyncHandler(async (req, res) => {
  const citizen = await Citizen.find({ nic: req.params.nic })

  if (!citizen) {
    res.status(400)
    throw new Error("citizen not found")
  }

  const updatedCitizen = await Citizen.findOneAndUpdate(req.params.nic, req.body, {
    new: true,
  })

  res.status(200).json({
    message: "your qualifications have been updated!",
    update_status: "true",
    matchedCount: "1",
    modifiedCount: "1",
  })
})

// add documents => PUT /api/citizens/docs/:nic
const addDocs = asyncHandler(async (req, res) => {
  const citizen = await Citizen.find({ nic: req.params.nic })

  if (!citizen) {
    res.status(400)
    throw new Error("citizen not found")
  }

  const updatedCitizen = await Citizen.findOneAndUpdate(req.params.nic, req.body, {
    new: true,
  })

  res.status(200).json({
    message: "your documents has been updated!",
    update_status: "true",
    matchedCount: "3",
    modifiedCount: "3",
  })
})

// verify citizen => PUT /api/citizens/:nic
const verifyCitizen = asyncHandler(async (req, res) => {
  const citizen = await Citizen.find({ nic: req.params.nic })

  if (!citizen) {
    res.status(400)
    throw new Error("citizen not found")
  }

  const updatedCitizen = await Citizen.findOneAndUpdate(req.params.nic, req.body, {
    new: true,
  })

  res.status(200).json({
    message: "citizen profile verified!",
    update_status: "true",
    matchedCount: "1",
    modifiedCount: "1",
  })
})

// remove citizen => DELETE /api/citizens/:nic
const removeCitizen = asyncHandler(async (req, res) => {
  const citizen = await Citizen.deleteOne({ nic: req.params.nic })

  if (!citizen) {
    res.status(400)
    throw new Error("citizen not found!")
  }

  res.status(200).json({
    message: "citizen profile has been removed!",
    update_status: "true",
    matchedCount: "1",
    modifiedCount: "1",
  })
})

// find by qualifications => GET /api/citizens/find/:(qualifications)
const findQualif = asyncHandler(async (req, res) => {
  const citizen = await Citizen.findOne({ qualifications: req.params.qualifications })

  if (!citizen) {
    res.status(400)
    throw new Error("citizen not found")
  }

  res.status(200).json(citizen)
})

// get contacts => GET /api/citizens/:nic/contacts
const getContacts = asyncHandler(async (req, res) => {
  const citizen = await Citizen.find({ nic: req.params.nic })

  if (!citizen) {
    res.status(400)
    throw new Error("citizen not found")
  }

  res.status(200).json({
    message: "citizen contacts found!",
    name: "L M N Fernando",
    nic: "993240061V",
    phone: "0763445661",
    email: "lmnfernando@gmail.com",
  })
})

module.exports = {
  getCitizens,
  citizenByNIC,
  registerCitizen,
  loginCitizen,
  addQualif,
  addDocs,
  verifyCitizen,
  removeCitizen,
  findQualif,
  getContacts,
}
