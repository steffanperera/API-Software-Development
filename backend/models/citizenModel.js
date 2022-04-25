const mongoose = require("mongoose")

const citizenSchema = mongoose.Schema(
  {
    nic: {
      type: String,
      require: [true, "Please enter your NIC!"],
      unique: true,
    },

    name: {
      type: String,
      require: [true, "Please enter your name!"],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Citizen", citizenSchema)

// done