const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define a route for the home page
app.get('/', (req, res) => {
  res.send('Hello, My name is Abdulkhaliq');
});

// Start the app and listen on a port
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

