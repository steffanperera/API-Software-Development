const mongoose = require("mongoose")

const companySchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please add company name!"],
    unique: [true],
  },
  username: {
    type: String,
    required: [true, "please add company username!"],
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
  country: {
    type: String,
    required: [true, "add job country!"],
  },
  job_field: {
    type: String,
    required: [true, "add job field!"],
  },
})

module.exports = mongoose.model("Company", companySchema)
