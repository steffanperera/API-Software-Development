const express = require("express")
const router = express.Router()
const { getCitizens, registerCitizen, loginCitizen } = require("../controllers/citizenController")

// get
router.get("/", getCitizens)

// create
router.post("/", registerCitizen)

// authenticate
router.post("/login", loginCitizen)

module.exports = router