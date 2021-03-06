const express = require('express');
const router = express.Router();
const UsersStorage = require('../service/usersStorage.js');
const PostsStorage = require('../service/postsStorage.js');

router.get('/', (req, res) => {
  const users = UsersStorage.find();
  if (users) {
    res.send(users);
  } else {
    res.status(404).send();
  }
});

router.get(`/:id`, (req, res) => {
  const {id} = req.params;
  const user = UsersStorage.find(id);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send();
  }
});

router.get('/:id/posts', (req, res) => {
  const {id} = req.params;
  const posts = PostsStorage.find(id);
  if (posts) {
    res.send(posts);
  } else {
    res.send({posts: [{title: 'Вы ещё не рассказали ни одной истории'}]});
  }
});

router.put(`/:id`, (req, res) => {
  const {id} = req.params;
  const {name, email, password, status} = req.body;
  const user = UsersStorage.update(id, {name, email, password, status});
  if (user) {
    res.send(user);
  } else {
    res.status(404).send();
  }
});

module.exports = router;
