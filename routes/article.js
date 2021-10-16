const express = require("express");
const router = express.Router();

const {
  create,
  deleteArticle,
  update,
  getOne,
  getAll,
  getUserArticles,
  languageFilter,
} = require("../controller/article");

router.route("/create").post(create);

router.route("/update/:id").put(update);

router.route("/delete/:id").delete(deleteArticle);

router.route("/getone/:id").get(getOne);

router.route("/getall").get(getAll);

router.route("/getUserArticles/:id").get(getUserArticles);

router.route("/languageFilter/:language").get(languageFilter);

module.exports = router;
