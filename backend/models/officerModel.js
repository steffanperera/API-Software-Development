const mongoose = require("mongoose")

const officerSchema = mongoose.Schema({
  officer_id: {
    type: String,
    required: [true, "please add officer id!"],
    unique: [true],
  },
  password: {
    type: String,
    required: [true, "please add password!"],
  },
})

module.exports = mongoose.model("Officer", officerSchema)
