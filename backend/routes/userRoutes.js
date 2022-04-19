const express = require("express")
const router = express.Router()
const { getUsers, setUser, updateUser, deleteUser } = require("../controllers/userController")

// user routes

// get
router.get("/", getUsers)

// create
router.post("/", setUser)

// update
router.put("/:id", updateUser)

// delete
router.delete("/:id", deleteUser)

module.exports = router
