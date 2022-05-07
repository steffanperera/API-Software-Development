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
  const { company_name, email, password, country, job_field } = req.body

  if (!company_name || !email || !password || !country || !job_field) {
    res.status(400)
    throw new Error("please add all fields!")
  }

  const userExists = await Company.findOne({ company_name })

  if (userExists) {
    res.status(400)
    throw new Error("company already exists!")
  }

  res.status(200).json({ message: "company registered!" })
})

// authenticate company => POST /api/companies/login
const loginCompany = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "login company!" })
})

module.exports = { getCompanies, registerCompany, loginCompany }
