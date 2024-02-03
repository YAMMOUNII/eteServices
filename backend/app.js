const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/database');
const apiRoutes = require('./routes/api');
const cors = require('cors');

const app = express();

// Configure Express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

// Connect to the database and sync models
db.sync()
  .then(() => {
    console.log('Connected to the database and synchronized models');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// API routes
app.use('/api', apiRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
