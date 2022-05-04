const asyncHandler = require("express-async-handler")

const Company = require("../models/companyModel")

// get companies => GET /api/companies
const getCompanies = asyncHandler(async (req, res) => {
  const companies = await Company.find()

  res.status(200).json(companies)
})

// register company => POST /api/companies
const registerCompany = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error("please add a text field!")
  }

  res.status(200).json({ message: "register company!" })
})

// authenticate company => POST /api/companies/login
const loginCompany = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get companies!" })
})

module.exports = { getCompanies, registerCompany, loginCompany }