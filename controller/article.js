const Article = require("../models/article");

exports.create = async (req, res, next) => {
  const { title, body } = req.body;

  const article = await Article.create({
    title,
    body,
  });

  await article.save();

  return res.send("New Article Added...");
};

exports.deleteArticle = async (req, res) => {
  const id = req.params.id;

  let deleteEvent = Article.deleteOne({ _id: id }, (err) => {
    if (err) {
      res.json({
        message: "There was an error",
        error: err,
      });
    } else {
      res.json({
        message: "Article was deleted",
      });
    }
  });
};

exports.update = async (req, res) => {
  let id = req.params.id;

  let updated = Article.findByIdAndUpdate(
    id,
    {
      $set: {
        title: req.body.title,
        body: req.body.body,
      },
    },
    (err, event) => {
      if (err) {
        res.json({
          message: "There was an error",
          error: err,
        });
      } else {
        res.json({
          message: "Article updated",
          data: event,
        });
      }
    }
  );
};

exports.getOne = async (req, res) => {
  id = req.params.id;
  const article = await Article.findById(id);
  return res.json({
    article: article,
  });
};

exports.getAll = async (req, res) => {
  const article = await Article.find();
  return res.send(article);
};
