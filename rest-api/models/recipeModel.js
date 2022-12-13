const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    prepTime: {
      type: String,
      required: true,
    },
    cookTime: {
      type: String,
      required: true,
    },
    ingredients: {
      type: String,
      required: true,
    },
    likes: [
      {
        type: ObjectId,
        ref: "User",
      },
    ],
    userId: {
      type: ObjectId,
      ref: "User",
    },
    subscribers: [{
      type: ObjectId,
      ref: "User"
  }],
  },
  { timestamps: { createdAt: "created_at" } }
);

module.exports = mongoose.model("Recipe", recipeSchema);
