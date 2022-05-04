const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  res.status(200).json({ msg: "get test!" })
})

router.post("/", (req, res) => {
  res.status(200).json({ msg: "post test!" })
})

router.put("/:id", (req, res) => {
  res.status(200).json({ msg: `put test! ${req.params.id}` })
})

router.delete("/:id", (req, res) => {
  res.status(200).json({ msg: `delete test! ${req.params.id}` })
})

module.exports = router
