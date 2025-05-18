const express = require('express');
const router = express.Router();
const PlayerModel = require('../models/playerModel');

router.get('/', (req, res) => {
  PlayerModel.getAll((err, jugadores) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener jugadores' });
    }
    res.json(jugadores);
  });
});

module.exports = router;