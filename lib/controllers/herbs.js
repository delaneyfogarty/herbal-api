const { Router } = require('express');
const Herb = require('../models/Herb');

module.exports = Router()
  .get('/', async (req, res) => {
    const allHerbs = await Herb.getAllHerbs();
    res.json(allHerbs);
  })

  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const singleHerb = await Herb.getHerbById(id);
    res.json(singleHerb);
  });
