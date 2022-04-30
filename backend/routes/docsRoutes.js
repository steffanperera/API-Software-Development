const express = require("express")
const router = express.Router()
const { addDocuments } = require("../controllers/docsController")

// add qualifications
router.put("/:id", addDocuments)

module.exports = router