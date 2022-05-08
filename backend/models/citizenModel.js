const mongoose = require("mongoose")

const citizenSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please add citizen name!"],
    unique: [true],
  },
  nic: {
    type: String,
    required: [true, "please add nic number!"],
    unique: [true],
  },
  address: {
    type: String,
    required: [true, "please add address!"],
  },
  phone: {
    type: String,
    required: [true, "please add phone number!"],
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
  qualifications: {
    type: String,
    required: [false],
  },
  birth_certificate: {
    type: String,
    required: [false],
  },
  cv: {
    type: String,
    required: [false],
  },
  passport_copy: {
    type: String,
    required: [false],
  },
  verified: {
    type: String,
    required: [false],
  },
})

module.exports = mongoose.model("Citizen", citizenSchema)
