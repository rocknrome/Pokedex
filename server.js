//DEPENDENCIES

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


//MIDDLEWARE
app.use(express.static('public'));

// Require Pokemon data file
const pokemon = require('./pokemon.js');


//ROUTES
// Index Route
app.get('/pokemon', (req, res) => {
  res.render('index', { pokemon });
});


// Start the server
app.listen(PORT, () => {
  console.log(`I am alive on port ${PORT}`);
});