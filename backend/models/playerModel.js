const db = require('../config/db');

const PlayerModel = {
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM players');
    return rows;
  }
};

module.exports = PlayerModel;
