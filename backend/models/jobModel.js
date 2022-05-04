const mongoose = require("mongoose")

const jobSchema = mongoose.Schema({
  company: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Company",
  },
  text: {
    type: String,
    required: [true, "please add text!"],
  },
})

module.exports = mongoose.model("Job", jobSchema)
