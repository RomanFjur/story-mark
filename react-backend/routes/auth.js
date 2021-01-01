const express = require('express');
const router = express.Router();
const userStorage = require('../service/usersStorage.js');

const usersStorage = new userStorage();
const IdGenerator = require('../utils.js');

router.post(`/login`, (req, res) => {
  const {email, password} = req.body;
  const user = usersStorage.find(email, password);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send();
  }
});

router.post(`/register`, (req, res) => {
  const {name, email, password} = req.body;
  const id = IdGenerator.getNewId();
  const user = usersStorage.save({name, email, password, id});
  res.send(user);
});

module.exports = router;