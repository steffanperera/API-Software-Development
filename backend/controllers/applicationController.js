const asyncHandler = require("express-async-handler")

const Application = require("../models/applicationModel")

// get applications => GET /api/applications
const getApplications = asyncHandler(async (req, res) => {
  const applications = await Application.find()

  res.status(200).json(applications)
})

// post applications => POST /api/applications
const postApplication = asyncHandler(async (req, res) => {
  const { qualifications, cv, birth_certificate, passport_copy } = req.body

  if (!qualifications || !cv || !birth_certificate || !passport_copy) {
    res.status(400)
    throw new Error("please add relevent documents!")
  }

  const application = await Application.create({
    qualifications: req.body.qualifications,
    cv: req.body.cv,
    birth_certificate: req.body.birth_certificate,
    passport_copy: req.body.passport_copy,
  })

  res.status(200).json(application)
})

// delete application => DELETE /api/applications/:id
const deleteApplication = asyncHandler(async (req, res) => {
  const application = await Application.findById(req.params.id)

  if (!application) {
    res.status(400)
    throw new Error("application not found!")
  }

  await application.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = { getApplications, postApplication, deleteApplication }

