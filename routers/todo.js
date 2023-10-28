const express = require('express');
const router = express.Router();
const { Todo } = require('../models');


router.get('/', async (req, res) => {
  const todos = await Todo.findAll();
  res.json(todos);
});


router.get('/:id', async (req, res) => {
  const todo = await Todo.findByPk(req.params.id);
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  res.json(todo);
});

router.post('/', async (req, res) => {
  const { title } = req.body;
  const todo = await Todo.create({ title });
  res.status(201).json(todo);
});


router.delete('/:id', async (req, res) => {
  const todo = await Todo.findByPk(req.params.id);
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  await todo.update({ deleted: true });
  res.json({ message: 'Todo deleted' });
});

module.exports = router;
