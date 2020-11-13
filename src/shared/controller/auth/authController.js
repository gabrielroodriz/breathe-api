const express = require('express');

const User = require('../../model/User');

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.send({ user });
  } catch (error) {
    return res.status(400).send({ error: 'Falha ao realizar o  registrar' });
  }
});

module.exports = (app) => app.use('/auth', router);
