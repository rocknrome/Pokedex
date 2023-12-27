//DEPENDENCIES
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');


//MIDDLEWARE
app.use(express.static('public'));

// Require Pokemon data file
const pokemon = require('./pokemon.js');


//ROUTES

// Root Route - Redirect to the index route
app.get('/', (req, res) => {
  res.redirect('/pokemon');
});

// Index Route
app.get('/pokemon', (req, res) => {
  // Rendering index.ejs
  res.render('index', { pokemon });
});

// Show Route
app.get('/pokemon/:id', (req, res) => {
  const pokeIndex = pokemon.findIndex(p => p.id === req.params.id);
  if (pokeIndex >= 0) {
    // Rendering show.ejs
    res.render('show', { poke: pokemon[pokeIndex] });
  } else {
    res.status(404).send('Pokémon not found');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
