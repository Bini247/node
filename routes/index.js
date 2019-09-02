let express      = require('express');
let router       = express.Router();
let postsService = require('../services/postService');

/* GET home page. */
router.get('/', function(req, res, next) {
  let dados = {
    title: 'putz',
    aluno: 'Bini'
  };

  let posts = postsService.getPosts();

  res.render('index', {dados, posts:posts});
});

module.exports = router;
