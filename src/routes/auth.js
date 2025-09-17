const express = require('express');
const User = require('../model/User');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.create({ name, email, password });
  req.session.userId = user.id;
  req.session.userName = user.name;
  res.json({ user: { name: user.name, email: user.email } });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  const valid = await user.validatePassword(password);
  if (valid) {
    req.session.userId = user.id;
    req.session.userName = user.name;
    res.json({ user: { name: user.name, email: user.email } });
  } else {
    res.status(400).json({ error: 'Неверные данные' });
  }
});

router.post('/logout', (req, res) => {
  req.session.destroy();
  res.json({});
});

router.get('/check', (req, res) => {
  res.json({ authenticated: !!req.session.userId, user: { name: req.session.userName } });
});

module.exports = router;
