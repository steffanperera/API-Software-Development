const express = require("express")
const router = express.Router()
const { registerCitizen } = require("../controllers/citizenController")

// create (registeration)
router.post("/", registerCitizen)

module.exports = router