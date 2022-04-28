const express = require("express")
const router = express.Router()
const { getCompanies, registerCompany, loginCompany } = require("../controllers/companyController")

// get
router.get("/", getCompanies)

// create
router.post("/", registerCompany)

// authenticate
router.post("/login", loginCompany)

module.exports = router