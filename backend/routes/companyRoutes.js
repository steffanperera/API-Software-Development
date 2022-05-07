const express = require("express")
const router = express.Router()
const { getCompanies, registerCompany, loginCompany } = require("../controllers/companyController")

router.get("/", getCompanies)

// register company
router.post("/", registerCompany)

// authenticate company
router.post("/login", loginCompany)

// remove company
// router.delete("/:id", removeCompany)

module.exports = router
