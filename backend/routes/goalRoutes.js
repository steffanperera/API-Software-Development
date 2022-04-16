const express = require("express")
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal } = require("../controllers/goalController")

// test routes

// get
router.get("/", getGoals)

// create
router.post("/", setGoal)

// update
router.put("/:id", updateGoal)

// delete
router.delete("/:id", deleteGoal)

module.exports = router
