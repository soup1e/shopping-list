const { Router } = require('express');
const Item = require('../models/Item.js');
const authItem = require('../middleware/authItem');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const item = await Item.insert({ ...req.body, user_id: req.user.id });
      res.json(item);
    } catch (e) {
      next(e);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const getAll = await Item.getAll(req.user.id);
      res.json(getAll);
    } catch (e) {
      next(e);
    }
  })
  .put('/:id', authItem, async (req, res, next) => {
    try {
      const update = await Item.updateById(req.params.id, req.body);
      res.json(update);
    } catch (e) {
      next(e);
    }
  })
  .delete('/:id', authItem, async (req, res, next) => {
    try {
      const item = await Item.delete(req.params.id);
      res.json(item);
    } catch (e) {
      next(e);
    }
  });
