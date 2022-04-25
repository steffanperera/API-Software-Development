const mongoose = require("mongoose")

const userSchema = mongoose.Schema(
  {
    nic: {
      type: String,
      required: [true, "Please enter your NIC!"],
      unique: true,
    },

    password: {
      type: String,
      required: [true, "Please enter your password!"],
      unique: true,
    },

    name: {
      type: String,
      required: [true, "Please enter your name!"],
    },

    age: {
      type: Number,
      required: [true, "Please enter your age!"],
    },

    address: {
      type: String,
      required: [true, "Please enter your address!"],
    },

    email: {
      type: String,
      required: [true, "Please enter your email!"],
      unique: true,
    },

    phone: {
      type: String,
      required: [true, "Please enter your phone number!"],
      unique: true,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("User", userSchema)
