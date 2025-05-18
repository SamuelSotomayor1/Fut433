require('dotenv').config();
const express = require('express');
const cors = require('cors');
const playerRoutes = require('./routes/playerRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/api/jugadores', playerRoutes);

app.get('/', (req, res) => {
  res.send('¡Servidor Fut433 funcionando!');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});