var express = require('express');
var router = express.Router();
const postStorage = require('./postsStorage.js');

const postsStorage = new postStorage();
const IdGenerator = require('../utils.js');

router.get('/', (req, res) => {
  const posts = postsStorage.find();
  res.send(posts);
});

router.get('/:id', (req, res) => { // поменять на userId (/posts/byuserid/:id)
  const {userId} = req.params;
  const posts = postsStorage.find(userId);
  if (posts) {
    res.send(posts);
  } else {
    res.send('Вы ещё не рассказали ни одной истории');
  }
});

router.post('/', (req, res) => {
  const {title, description, image} = req.body; // id user-a через получается токен
  const post = postsStorage.save({title, description, image});
  res.send(post);
});

module.exports = router;