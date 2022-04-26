const express = require("express")
const router = express.Router()
const { getCitizens, registerCitizen } = require("../controllers/citizenController")

// get
router.get("/", getCitizens)

// create
router.post("/", registerCitizen)

module.exports = router