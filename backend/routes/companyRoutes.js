const express = require("express")
const router = express.Router()
const { getCompanies, postCompany, deleteCompany } = require("../controllers/companyController")

router.get("/", getCompanies)

router.post("/", postCompany)

router.delete("/:id", deleteCompany)

module.exports = router
