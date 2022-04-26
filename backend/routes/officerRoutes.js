const express = require("express")
const router = express.Router()
const { getOfficers, registerOfficer } = require("../controllers/officerController")

// get
router.get("/", getOfficers)

// create
router.post("/", registerOfficer)

module.exports = router