const articleList = require('../controllers/articleListController');
const userHandlers = require('../controllers/userController');

module.exports = (app) => {
  app
    .route('/articles')
    .get(articleList.listAllArticles)
    .post(
      userHandlers.loginRequired,
      articleList.createNewArticle,
    );

  app
    .route('/article/:articleid')
    .get(articleList.readArticle)
    .put(articleList.updateArticle)
    .delete(articleList.deleteArticle);

  app
    .route('/articles/by/:tag')
    .get(articleList.listTagArticles);

  app.route('/auth/register').post(userHandlers.register);

  app.route('/auth/sign_in').post(userHandlers.signIn);
};
