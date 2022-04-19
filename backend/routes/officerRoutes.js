const express = require("express")
const router = express.Router()
const {
  getOfficers,
  setOfficer,
  updateOfficer,
  deleteOfficer,
} = require("../controllers/officerController")

// test routes

// get
router.get("/", getOfficers)

// create
router.post("/", setOfficer)

// update
router.put("/:id", updateOfficer)

// delete
router.delete("/:id", deleteOfficer)

module.exports = router
