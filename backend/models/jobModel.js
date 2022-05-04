const mongoose = require("mongoose")

const jobSchema = mongoose.Schema({
  text: {
    type: String,
    required: [true, "please add text!"],
  },
})

module.exports = mongoose.model("Job", jobSchema)
