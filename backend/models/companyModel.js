const mongoose = require("mongoose")

const companySchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "please add username!"],
      unique: true,
    },

    password: {
      type: String,
      required: [true, "please add password!"],
      unique: true,
    },

    company_name: {
      type: String,
      required: [true, "please add company name!"],
    },

    field: {
      type: String,
      required: [true, "please add job field!"],
    },

    country: {
      type: String,
      required: [true, "please add country!"],
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
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Company Model", companySchema)