const mongoose = require("mongoose")

const citizenSchema = mongoose.Schema(
  {
    nic: {
      type: String,
      required: [true, "please add NIC!"],
      unique: true,
    },

    password: {
      type: String,
      required: [true, "please add password!"],
      unique: true,
    },

    name: {
      type: String,
      required: [true, "please add name!"],
    },

    age: {
      type: Number,
      required: [true, "please add age!"],
    },

    address: {
      type: String,
      required: [true, "please add address!"],
    },

    email: {
      type: String,
      required: [true, "please add email!"],
      unique: true,
    },

    phone: {
      type: String,
      required: [true, "please add phone!"],
      unique: true,
    },

    qualifications: {
      type: String,
    },

    documents: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Citizen Model", citizenSchema)
