const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide the Title"],
  },
  body: {
    type: String,
    required: [true, "Please provide the article body"],
  },
  userId: {
    type: String,
    required: [true, "Please provide the user Id"],
  },
});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
