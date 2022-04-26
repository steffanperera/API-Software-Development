const express = require("express")
const router = express.Router()
const { getCompanies, registerCompany } = require("../controllers/companyController")

// get
router.get("/", getCompanies)

// create
router.post("/", registerCompany)

module.exports = router