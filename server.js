const express = require('express');
const path = require('path');

const app = express(); // add midleware
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const table = [
  {
    routeName: 'yoda',
    name: 'Yoda',
    role: 'Jedi Master',
    age: 900,
    forcePoints: 2000,
  },
  {
    routeName: 'darthmaul',
    name: 'Darth Maul',
    role: 'Sith Lord',
    age: 200,
    forcePoints: 1200,
  },
  {
    routeName: 'obiwankenobi',
    name: 'Obi Wan Kenobi',
    role: 'Jedi Master',
    age: 55,
    forcePoints: 1350,
  },
];

const waitlist = [];

//Hot Restaurant

//Basic route
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/reserve', function (req, res) {
  res.sendFile(path.join(__dirname, 'reserve.html'));
});
app.get('/table', function (req, res) {
  res.sendFile(path.join(__dirname, 'table.html'));
});

// Displays all characters
app.get('/api/table', function (req, res) {
  return res.json(table);
});

// Displays all characters
app.get('/api/waitlist', function (req, res) {
  return res.json(waitlist);
});

app.listen(PORT, function () {
  console.log('App listening on PORT ' + PORT);
});

