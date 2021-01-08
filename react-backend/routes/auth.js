const express = require('express');
const router = express.Router();
const userStorage = require('../service/usersStorage.js');
const jwt = require('jsonwebtoken');
const secret = 'shhhhh';

const usersStorage = new userStorage();
const IdGenerator = require('../utils.js');

router.post(`/login`, (req, res) => {
  const {id, email, password, token} = req.body;
  if (token) {
    const userUntokened = jwt.verify(token, secret);
    const {id, email, password} = userUntokened;
    const user = usersStorage.find(id, email, password);
    if (user) {
      res.send(user);
    } else {
      res.status(403).send();
    }
  } else {
    const user = usersStorage.find(id, email, password);
    if (user) {
      res.send({token: jwt.sign(user, secret)});
    } else {
      res.status(403).send();
    }
  }
});

router.post(`/register`, (req, res) => {
  const {name, email, password} = req.body;
  const id = IdGenerator.getNewId();
  const user = usersStorage.save({name, email, password, id});
  res.send({token: jwt.sign(user, secret)});
});

module.exports = router;