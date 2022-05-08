const express = require("express")
const router = express.Router()
const { getCitizens, registerCitizen, loginCitizen, addQualif, citizenByNIC, removeCitizen } = require("../controllers/citizenController")

router.get("/", getCitizens)

// register citizen
router.post("/", registerCitizen)

// authenticate citizen
router.post("/login", loginCitizen)

// add qualification
router.put("/:id", addQualif)

// get by nic
router.get("/:id", citizenByNIC)

// remove citizen
router.delete("/:id", removeCitizen)

module.exports = router