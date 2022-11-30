const { Router } = require('express');
const Item = require('../models/Item.js');

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
  });
