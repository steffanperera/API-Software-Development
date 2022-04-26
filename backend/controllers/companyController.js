const asyncHandler = require("express-async-handler")
const Citizen = require("../models/companyModel")

// desc:    get companies
// route:   GET /api/companies
const getCompanies = asyncHandler(async (req, res) => {
  const companies = await Company.find()

  res.status(200).json(companies)
})

// desc:    create company
// route:   POST /api/citizens
const registerCompany = asyncHandler(async (req, res) => {
  const { username, password, company, field, country, address, email, phone } = req.body

  if (!username || !password || !company || !field || !country || !address || !email || !phone) {
    res.status(400)
    throw new Error("please add all fields")
  }

  const citizen = await Citizen.create({
    username: req.body.username,
    password: req.body.password,
    company: req.body.company,
    field: req.body.field,
    country: req.body.country,
    address: req.body.address,
    email: req.body.email,
    phone: req.body.phone,
  })

  res.status(200).json(citizen)
})

module.exports = {
  getCompanies,
  registerCompany,
}