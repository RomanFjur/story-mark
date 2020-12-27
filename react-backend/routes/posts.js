var express = require('express');
var router = express.Router();
const postStorage = require('./storage/postsStorage.js');

const postsStorage = new postStorage();
const IdGenerator = require('../utils.js');

/* GET users listing. */
router.get('/', (req, res) => {
  const posts = postsStorage.find();
  res.send(posts);
});

router.post('/', (req, res) => {
  const posts = postsStorage.find();
  const {title, description, image} = req.body;
  const post = postsStorage.save({title, description, image});
  res.send(post);
});

module.exports = router;