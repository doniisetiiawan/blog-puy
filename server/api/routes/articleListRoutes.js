import {
  listAllArticles,
  listTagArticles,
  createNewArticle,
  readArticle,
  updateArticle,
  deleteArticle,
} from '../controllers/articleListController';
import {
  register,
  signIn,
  loginRequired,
} from '../controllers/userController';

export default (app) => {
  app
    .route('/articles')
    .get(listAllArticles)
    .post(loginRequired, createNewArticle);

  app
    .route('/article/:articleid')
    .get(readArticle)
    .put(updateArticle)
    .delete(deleteArticle);

  app.route('/articles/by/:tag').get(listTagArticles);

  app.route('/auth/register').post(register);

  app.route('/auth/sign_in').post(signIn);
};
