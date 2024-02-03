// const express = require('express');
// const bodyParser = require('body-parser');
// const connectDB = require('./config/database'); // Import the connectDB function
// const apiRoutes = require('./routes/api');
// const cors = require('cors');

// const app = express();

// // Configure Express
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(cors());

// // Connect to the database (MongoDB)
// const mongoose = connectDB(); // Call the connectDB function and get the mongoose object

// // Set up event listeners for the database connection
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//     console.log('Connected to MongoDB');
// });

// // API routes
// app.use('/api', apiRoutes);

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database'); // Import the connectDB function
const apiRoutes = require('./routes/api');
const cors = require('cors');

const app = express();

// Configure Express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

// Connect to the database (MongoDB)
connectDB()
  .then((mongoose) => {
    // Set up event listeners for the database connection
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.once('open', () => {
      console.log('Connected to MongoDB');
    });

    // API routes
    app.use('/api', apiRoutes);

    // Start the server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  });
