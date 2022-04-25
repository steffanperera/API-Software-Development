const mongoose = require("mongoose")

const goalSchema = mongoose.Schema(
  {
    citizen: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Citizen",
    },
    text: {
      type: String,
      required: [true, "please add a text value"],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Goal Model", goalSchema)
