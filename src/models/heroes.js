const { Schema, model } = require("mongoose");

const heroSchema = Schema(
  {
    avatar: {
      type: String,
    },
    nickName: {
      type: String,
    },
    originName: {
      type: String,
    },
    originDescription: {
      type: String,
    },
    superPowers: {
      type: String,
    },
    catchPhrase: {
      type: String,
    },
    images: {
      type: Object,
    },
  },
  { versionKey: false }
);

const Hero = model("hero", heroSchema);
console.log("Hero from models", Hero);

module.exports = { Hero };
