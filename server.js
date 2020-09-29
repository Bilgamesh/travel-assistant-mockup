const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8080;

const app = express();

const cab = require('./router/cab-router');
const flight = require('./router/flight-router');

app.use(bodyParser.json());
app.use('/cabs', cab);
app.use('/flights', flight);

app.listen(port, () => console.log(`Listeningn on http://localhost:${port}`));
