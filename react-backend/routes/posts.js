const express = require('express');
const router = express.Router();
const postStorage = require('../service/postsStorage.js');

const postsStorage = new postStorage();
const IdGenerator = require('../utils.js');

router.get('/', (req, res) => {
  const posts = postsStorage.find();
  res.send(posts);
});

router.post('/', (req, res) => {
  const {id, title, image, hashtag} = req.body;
  const post = postsStorage.save(id, {title, image, hashtag});
  res.send(post);
});

module.exports = router;