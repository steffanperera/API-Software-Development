const express = require("express")
const router = express.Router()
const { getOfficers, registerOfficer, loginOfficer } = require("../controllers/officerController")

// get
router.get("/", getOfficers)

// create
router.post("/", registerOfficer)

// authenticate
router.post("/login", loginOfficer)

module.exports = router