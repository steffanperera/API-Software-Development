const express = require("express")
const router = express.Router()
const {
  getCitizens,
  registerCitizen,
  loginCitizen,
  addQualifications,
  addDocuments,
  sortCitizens,
} = require("../controllers/citizenController")

// get
router.get("/", getCitizens)

// create
router.post("/", registerCitizen)

// authenticate
router.post("/login", loginCitizen)

// add qualifications
router.put("/:id", addQualifications)

// add documents
router.put("/docs/:id", addDocuments)

// sort by nic
router.get("/:nic", sortCitizens)

module.exports = router
