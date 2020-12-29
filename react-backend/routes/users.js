const express = require('express');
const router = express.Router();
const userStorage = require('../service/usersStorage.js');

const usersStorage = new userStorage();
const IdGenerator = require('../utils.js');

router.get('/', (req, res) => {
  const users = usersStorage.find();
  if (users) {
    res.send(users);
  } else {
    res.status(404).send();
  }
});

router.get(`/:userId`, (req, res) => {
  const {userId} = req.params;
  const user = usersStorage.find(userId);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send();
  }
});

router.put(`/:userId`, (req, res) => {
  const {userId} = req.params;
  const {name, email, password} = req.body;
  usersStorage.update(userId, {name, email, password});
  res.send(200);
});

module.exports = router;
