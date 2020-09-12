const express = require('express');
const path = require('path');

const app = express(); // add midleware
const app = preocess.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Hot Restaurant
