const express = require("express")
const router = express.Router()
const { getJobs, postJob, updateJob, deleteJob } = require("../controllers/jobController")

router.get("/", getJobs)

router.post("/", postJob)

router.put("/:id", updateJob)

router.delete("/:id", deleteJob)

module.exports = router
