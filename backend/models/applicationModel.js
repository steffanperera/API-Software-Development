const mongoose = require("mongoose")

const applicationSchema = mongoose.Schema({
  citizen: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Citizen",
  },
  qualifications: {
    type: String,
    required: [true, "please add qualifications!"],
  },
  cv: {
    type: String,
    required: [true, "please add cv!"],
  },
  birth_certificate: {
    type: String,
    required: [true, "please add birth certificate!"],
  },
  passport_copy: {
    type: String,
    required: [true, "please add passport copy!"],
  },
})

module.exports = mongoose.model("Application", applicationSchema)
