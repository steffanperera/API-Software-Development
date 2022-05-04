const mongoose = require("mongoose")

const companySchema = mongoose.Schema({
  company_name: {
    type: String,
    required: [true, "please add company name!"],
  },
  password: {
    type: String,
    required: [true, "please add password!"],
    unique: [true],
  },
  job_field: {
    type: String,
    required: [true, "add job field!"]
  }
})

module.exports = mongoose.model("Company", companySchema)
