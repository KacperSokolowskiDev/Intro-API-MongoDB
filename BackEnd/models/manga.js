const mongoose = require("mongoose");

// Schema mongoose ( ! IMPORTANT )
const Schema = mongoose.Schema;

const schema = new Schema({
  title: { type: String, required: true },
  nbPages: { type: Number, required: true },
  author: { type: String, required: true },
  // get a user's name to redirect onto his profile page
  // author: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: false },
});

module.exports = mongoose.model("Manga", schema);
