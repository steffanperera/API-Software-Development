const express = require("express")
const router = express.Router()
const { getOfficers, registerOfficer, loginOfficer } = require("../controllers/officerController")

router.get("/", getOfficers)

// register officer
router.post("/", registerOfficer)

// authenticate officer
router.post("/login", loginOfficer)

module.exports = router