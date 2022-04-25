const mongoose = require("mongoose")

const goalSchema = mongoose.Schema(
  {
    // associate user with test goal
    user: {
      tepy: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
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
