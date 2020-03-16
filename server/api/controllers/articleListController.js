import Article from '../models/Article';

const listAllArticles = (req, res) => {
  Article.find({}, (err, article) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(article);
  });
};

const listTagArticles = (req, res) => {
  Article.find({ tag: req.params.tag }, (err, article) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(article);
  });
};

const createNewArticle = (req, res) => {
  const newArticle = new Article(req.body);
  newArticle.save((err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
};

const readArticle = (req, res) => {
  Article.findById(req.params.articleid, (err, article) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(article);
  });
};

const updateArticle = (req, res) => {
  Article.findOneAndUpdate(
    { _id: req.params.articleid },
    req.body,
    { new: true },
    (err, article) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(article);
    },
  );
};

const deleteArticle = (req, res) => {
  Article.deleteOne({ _id: req.params.articleid }, (err) => {
    if (err) {
      res.status(404).send(err);
    }
    res
      .status(200)
      .json({ message: 'Article successfully deleted' });
  });
};

export {
  listAllArticles,
  listTagArticles,
  createNewArticle,
  readArticle,
  updateArticle,
  deleteArticle,
};
