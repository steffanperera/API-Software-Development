const express = require("express")
const router = express.Router()
const { getCitizens, registerCitizen, loginCitizen, removeCitizen } = require("../controllers/citizenController")

router.get("/", getCitizens)

// register citizen
router.post("/", registerCitizen)

// authenticate citizen
router.post("/login", loginCitizen)

// remove citizen
router.delete("/:id", removeCitizen)

module.exports = router