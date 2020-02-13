const articleList = require('../controllers/articleListController');

module.exports = (app) => {
  app
    .route('/articles')
    .get(articleList.listAllArticles)
    .post(articleList.createNewArticle);

  app
    .route('/article/:articleid')
    .get(articleList.readArticle)
    .put(articleList.updateArticle)
    .delete(articleList.deleteArticle);

  app
    .route('/articles/by/:tag')
    .get(articleList.listTagArticles);
};
