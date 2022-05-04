const asyncHandler = require("express-async-handler")

const Company = require("../models/companyModel")

// get companies => GET /api/companies
const getCompanies = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get companies!" })
})

// post company => POST /api/companies
const postCompany = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error("please add a text field!")
  }

  res.status(200).json({ message: "post company!" })
})

// delete company => DELETE /api/companies/:id
const deleteCompany = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete company! ${req.params.id}` })
})

module.exports = { getCompanies, postCompany, deleteCompany }