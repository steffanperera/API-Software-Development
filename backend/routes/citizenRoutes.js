const express = require("express")
const router = express.Router()
const { getCitizens, citizenByNIC, registerCitizen, loginCitizen, addQualif, addDocs, removeCitizen } = require("../controllers/citizenController")

// get citizens
router.get("/", getCitizens)

// get by nic
router.get("/:nic", citizenByNIC)

// register citizen
router.post("/", registerCitizen)

// authenticate citizen
router.post("/login", loginCitizen)

// add qualification
router.put("/:nic", addQualif)

// add documents
router.put("/docs/:nic", addDocs)

// remove citizen
router.delete("/:nic", removeCitizen)

module.exports = router