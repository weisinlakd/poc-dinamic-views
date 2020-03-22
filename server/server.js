require('./config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

// parse application/json
app.use(bodyParser.json());

app.listen(process.env.PORT, () => console.log(`escuchando puerto ${process.env.PORT}`));