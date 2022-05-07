const mongoose = require("mongoose")

const citizenSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please add citizen name!"],
    unique: [true],
  },
  username: {
    type: String,
    required: [true, "please add username!"],
    unique: [true],
  },
  email: {
    type: String,
    required: [true, "please add email!"],
    unique: [true],
  },
  password: {
    type: String,
    required: [true, "please add password!"],
  },
})

module.exports = mongoose.model("Citizen", citizenSchema)
