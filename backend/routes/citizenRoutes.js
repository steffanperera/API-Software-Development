const express = require("express")
const router = express.Router()
const {
  getCitizens,
  registerCitizen,
  loginCitizen,
  addQualifications,
} = require("../controllers/citizenController")

// get
router.get("/", getCitizens)

// create
router.post("/", registerCitizen)

// authenticate
router.post("/login", loginCitizen)

// add qualifications
router.post("/:id", addQualifications)

module.exports = router
