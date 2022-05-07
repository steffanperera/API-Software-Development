const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const Company = require("../models/companyModel")

// get companies => GET /api/companies
const getCompanies = asyncHandler(async (req, res) => {
  const companies = await Company.find()

  res.status(200).json(companies)
})

// register company => POST /api/companies
const registerCompany = asyncHandler(async (req, res) => {
  const { name, username, email, password, country, job_field } = req.body

  if (!name || !username || !email || !password || !country || !job_field) {
    res.status(400)
    throw new Error("please add all fields!")
  }

  const companyExists = await Company.findOne({ name })

  if (companyExists) {
    res.status(400)
    throw new Error("company already exists!")
  }

  // hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // create company
  const company = await Company.create({
    name,
    username,
    email,
    password: hashedPassword,
    country,
    job_field,
  })

  if (company) {
    res.status(201).json({
      msg: "company registered!",
      _id: company.id,
      name: company.name,
      username: company.username,
      email: company.email,
      country: company.country,
      job_field: company.job_field,
    })
  } else {
    res.status(400)
    throw new Error("invalid company data!")
  }
})

// authenticate company => POST /api/companies/login
const loginCompany = asyncHandler(async (req, res) => {
  

  res.status(200).json({ message: "login company!" })
})

module.exports = { getCompanies, registerCompany, loginCompany }
