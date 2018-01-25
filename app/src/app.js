const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Secure-API'));

app.use((req, res) => res.status(404).send('404: Not Found'));
app.use((error, req, res, next) => res.status(500).send('500: Internal Server Error'));

module.exports = app;
