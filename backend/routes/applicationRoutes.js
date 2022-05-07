const express = require("express")
const router = express.Router()
const { getApplications, postApplication, deleteApplication } = require("../controllers/applicationController")

router.get("/", getApplications)

router.post("/", postApplication)

router.delete("/:id", deleteApplication)

module.exports = router