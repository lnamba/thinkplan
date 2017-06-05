const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const plan = require('./routes/plan');
const lessons = require('./routes/lessons');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'app')))

app.use('/plan', plan);
app.use('/lessons', lessons);

const port = process.env.PORT || '4200';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));