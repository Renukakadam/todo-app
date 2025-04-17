const express = require('express');
const router = express.Router();

let todos = [];

router.get('/', (req, res) => {
  res.render('index', { todos });
});

router.post('/add', (req, res) => {
  const task = req.body.task;
  if (task) todos.push(task);
  res.redirect('/');
});

module.exports = router;
