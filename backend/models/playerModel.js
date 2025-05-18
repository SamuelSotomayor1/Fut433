const db = require('../config/db');

const PlayerModel = {
  getAll: (callback) => {
    db.query('SELECT * FROM players', (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results);
    });
  },

  // Puedes agregar más funciones, como:
  getById: (id, callback) => {
    db.query('SELECT * FROM jugadores WHERE id_players = ?', [id], (err, result) => {
      if (err) return callback(err);
      callback(null, result[0]);
    });
  }
};

module.exports = PlayerModel;