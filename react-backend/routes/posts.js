const express = require('express');
const router = express.Router();
const PostsStorage = require('../service/postsStorage.js');

const IdGenerator = require('../utils.js');

router.get('/', (req, res) => {
  const posts = PostsStorage.find();
  res.send(posts);
});

router.post('/', (req, res) => {
  const {id, title, description, image, hashtag} = req.body;
  PostsStorage.save({id, title, description, image, hashtag});
  const posts = PostsStorage.find(id);
  res.send(posts);
});

module.exports = router;