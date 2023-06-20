const express = require('express');
const app = express();
const routes = require('./routes/routes');

app.use(express.json());
app.use('/api/v3/app', routes);

module.exports = app;
