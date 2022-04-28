const asyncHandler = require("express-async-handler")
const Company = require("../models/companyModel")

// desc:    get companies
// route:   GET /api/companies
const getCompanies = asyncHandler(async (req, res) => {
  const companies = await Company.find()

  res.status(200).json(companies)
})

// desc:    create company
// route:   POST /api/citizens
const registerCompany = asyncHandler(async (req, res) => {
  const { username, password, company_name, field, country, address, email, phone } = req.body

  if (
    !username ||
    !password ||
    !company_name ||
    !field ||
    !country ||
    !address ||
    !email ||
    !phone
  ) {
    res.status(400)
    throw new Error("please add all fields")
  }

  const company = await Company.create({
    username: req.body.username,
    password: req.body.password,
    company_name: req.body.company_name,
    field: req.body.field,
    country: req.body.country,
    address: req.body.address,
    email: req.body.email,
    phone: req.body.phone,
  })

  res.status(200).json(company)
})

// desc:    authenticate company
// route:   POST /api/companies/login
const loginCompany = asyncHandler(async (req, res) => {})

module.exports = {
  getCompanies,
  registerCompany,
  loginCompany,
}
