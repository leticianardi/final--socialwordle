const { Schema, model } = require("mongoose");

const scoreSchema = new Schema(
  {
    score: {
      type: String,
      required: true,
      trim: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Score = model("Score", scoreSchema);

module.exports = Score;
