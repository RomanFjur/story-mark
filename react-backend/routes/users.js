const express = require('express');
const router = express.Router();
const userStorage = require('../service/usersStorage.js');
const postStorage = require('../service/postsStorage.js');

const usersStorage = new userStorage();
const postsStorage = new postStorage();

router.get('/', (req, res) => {
  const users = usersStorage.find();
  if (users) {
    res.send(users);
  } else {
    res.status(404).send();
  }
});

router.get(`/:id`, (req, res) => {
  const {id} = req.params;
  const user = usersStorage.find(id);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send();
  }
});

router.get('/:id/posts', (req, res) => {
  const {id} = req.params;
  const posts = postsStorage.find(id);
  if (posts) {
    res.send(posts);
  } else {
    res.send({posts: [{title: 'Вы ещё не рассказали ни одной истории'}]});
  }
});

router.put(`/:id`, (req, res) => {
  const {id} = req.params;
  const {name, email, password, status} = req.body;
  usersStorage.update(id, {name, email, password, status});
  const user = usersStorage.find(id);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send();
  }
});

module.exports = router;
