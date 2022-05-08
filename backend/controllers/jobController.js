const asyncHandler = require("express-async-handler")

const Job = require("../models/jobModel")

// get jobs => GET /api/jobs
const getJobs = asyncHandler(async (req, res) => {
  const jobs = await Job.find()

  res.status(200).json(jobs)
})

// post jobs => POST /api/jobs
const postJob = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error("please add a text field!")
  }

  const job = await Job.create({
    text: req.body.text,
    company: req.company.id,
  })

  res.status(200).json(job)
})

// update job => PUT /api/jobs/:id
const updateJob = asyncHandler(async (req, res) => {
  const job = await Job.findById(req.params.id)

  if (!job) {
    res.status(400)
    throw new Error("job not found!")
  }

  const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true })

  res.status(200).json(updatedJob)
})

// delete job => DELETE /api/jobs/:id
const deleteJob = asyncHandler(async (req, res) => {
  const job = await Job.findById(req.params.id)

  if (!job) {
    res.status(400)
    throw new Error("job not found!")
  }

  await job.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = { getJobs, postJob, updateJob, deleteJob }
