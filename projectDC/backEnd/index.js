const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./db');
const Raza = require('./models/raza');
const razaRoutes = require('./routes/raza');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());

app.use(bodyParser.json());

db.authenticate()
  .then(() => {
    console.log("Conexion a bd exitosa");
    return Raza.sync();
  })
  .then(() => {
    app.use('/raza', razaRoutes);
    
    const port = 3000;
    
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
