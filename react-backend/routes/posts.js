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
  const {id, title, description, iamge, hashtag} = req.body;
  postsStorage.save({id, title, description, image, hashtag});
  const posts = postsStorage.find(id);
  res.send(posts);
});

module.exports = router;