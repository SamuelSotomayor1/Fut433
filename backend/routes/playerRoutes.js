const express = require('express');
const router = express.Router();
const PlayerModel = require('../models/playerModel');

router.get('/', async (req, res) => {
  try {
      const jugadores = await PlayerModel.getAll();
      res.json(jugadores);                         
    } catch (error) {
      console.error('Error en GET /api/player:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
});

module.exports = router;