const express = require("express")
const router = express.Router()
const { getJobs, postJobs, updateJobs, deleteJobs } = require("../controllers/jobController")

router.get("/", getJobs)

router.post("/", postJobs)

router.put("/:id", updateJobs)

router.delete("/:id", deleteJobs)

module.exports = router
