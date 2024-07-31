const express = require('express');
const app = express();
const path = require('path');


const userRoutes = require('./routes/htmlroute');
app.use(userRoutes); 

// Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import and use routes
const apiRoutes = require('./routes/notes');
app.use(apiRoutes);


// Start the server
const PORT = process.env.port || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on  http://localhost:${PORT}`);
});