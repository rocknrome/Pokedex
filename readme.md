#INDEX PAGE SCREENSHOT

![Index page styling screenshot](https://github.com/rocknrome/Pokedex/assets/126816805/24498683-100c-4512-a0fa-049e282796b0)


#DETAILS PAGE SCREENSHOT

![Details page styling screenshot](https://github.com/rocknrome/Pokedex/assets/126816805/c33ed2af-828f-4d8f-b5e4-264e712ecd9a)


# Pokedex

![](https://imgur.com/oxGPnND.png)

Your mission is to be the very best, like no one ever was, at making a Pokémon manager (a Pokédex).

#### Learning Objectives

- Full CRUD App

#### Prerequisites

- JavaScript
- Node / Express
- HTML / CSS

---

## Getting Started

All you are given is a `pokemon.js` file that has all the raw data for 151 Pokémon (it's over 50,000 lines of code). You can render this as JSON in your browser. If you decide to check it out in your text editor, don't click on or open this file unless you are prepared to wait a minute or so for it to load. It is a huge file.

It is up to you how you build your app, in what order you want to do things, what kind of design flow your app will have, where you put your delete button, etc, and what parts of the Pokémon data your pages will display.

There are a few requirements to keep in mind:

### MVP (Minimum Viable Product)

Your app should:

	- display a bunch of Pokémon images on the index
	- have separate show pages for each Pokémon, accessible by clicking on a Pokémon's image on the index page
	- have the ability to add a new Pokémon
	- have the ability to edit existing Pokémon
	- have the ability to delete Pokémon
	- have some styling

### Setting up

Here is the pokemon data for your pokemon app

[Download Here](https://drive.google.com/file/d/1ygd_EchX10sUXIQBGbomhP6d4eyESyTX/view?usp=sharing)

### Routes

Your app should use RESTful routes:

- Index
  - GET `/pokemon`<br>
- Show
  - GET `/pokemon/:id`<br>
- New
  - GET `/pokemon/new`<br>
- Edit
  - GET `/pokemon/:id/edit`<br>
- Create
  - POST `/pokemon`<br>
- Update
  - PUT `/pokemon/:id`<br>
- Destroy
  - DELETE `/pokemon/:id`<br>

### Need a jumpstart?

<details><summary><strong>Some server.js starter code to get you started</strong></summary>
<pre>
const express    = require('express');
const app        = express();

const Pokemon    = require('../models/pokemon.js');

// INDEX
app.get('/', (req, res) => {
	res.render('index.ejs', { data: Pokemon });
});

// SHOW
app.get('/:id', (req, res) => {
    res.render('show.ejs', { data: Pokemon[req.params.id] });
});
</pre>
</details>

## Data

### Notes on the Pokémon data and what to display

The `pokemon.js` file is massive and there is a ton of data to parse through. You need not display all of it on your pages. On your index page, you can just render the images.

Here are suggestions for what to display on your Pokémon's show page:

- The pokemon's name
- The image of the pokemon
- An unordered list of the Pokemon's types (eg. water, poison, etc).
- The pokemon's stats for HP, ATTACK, and DEFENSE.

## Style Your App

Try and make your app look and act nicely with static assets (set up a public folder and add some css, js)-- consider using some jQuery!

### Need some style inspiration?
These are screenshots from what other students have done to their Pokedex:

<details>
<summary>Example 1</summary>

![](https://imgur.com/MZ361IP.png)

![](https://imgur.com/65HTgw1.png)
</details>

<details>
<summary>Example 2</summary>

![](https://imgur.com/XsaaJ2x.png)

![](https://imgur.com/zppz3ev.png)
</details>

<details>
<summary>Example 3</summary>

![](https://imgur.com/ZRFfwgR.png)

![](https://imgur.com/gEOi0KX.png)
</details>

## Commits

The order of your commits this time does not matter, but refer back to the MVP to make sure that you're meeting all of the requirements. Make your commits **as you complete the work**, not all at once in the end! Some sample commits can be found below.

<details><summary><strong>Sample commits</strong>:</summary>

<hr>
** Commit your work.** <br>
"Server is working and displays a plain index page"
<hr>


<hr>
** Commit your work.** <br>
"Displays a bunch of Pokémon images on the index".
<hr>

<hr>
** Commit your work.** <br>
"Has separate show pages for each Pokémon".
<hr>

<hr>
** Commit your work.** <br>
"Has the ability to add a new Pokémon".
<hr>

<hr>
** Commit your work.** <br>
"Has the ability to edit existing Pokémon".
<hr>

<hr>
** Commit your work.** <br>
"Has the ability to delete Pokémon".
<hr>

<hr>
** Commit your work.** <br>
"The app uses RESTful routing, all seven RESTful routes".
<hr>

<hr>
** Commit your work.** <br>
"View templates are complete".
<hr>

<hr>
** Commit your work.** <br>
"Static assets included (CSS) and styled app".
<hr>

</details>

## Deliverables

- A Pokedex app that meets all the MVP requirements outlined at the beginning of this markdown.

## Technical Requirements

- Your app MUST run without syntax errors. If there are errors you can't solve, comment them out and leave a comment above explaining what is wrong


## Submission Guidelines

- Submit your homework via github issues before the next class starts at 10AM and please don't forget to fill out the form!

---
