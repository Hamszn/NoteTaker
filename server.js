const express = require('express');
// Initialize Express
const app = express();
// Middleware for parsing JSON request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Import routes

const apiRoutes = require('./routes/api-routes');
const htmlRoutes = require('./routes/htmlroutes');

// Use routes

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// Start the server
const PORT = process.env.port || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on  http://localhost:${PORT}`);
});