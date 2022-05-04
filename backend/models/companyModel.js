const mongoose = require("mongoose")

const companySchema = mongoose.Schema({
  company_name: {
    type: String,
    required: [true, "please add company name!"],
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
    unique: [true],
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
