'use strict';
const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');

const stocklistRoute = require('./routes/stocklistRoutes');
const staffRoute = require('./routes/staffRoutes');
const officeRoute = require('./routes/officeRoutes');
const directionRoute = require('./routes/directionRoutes');
const keepRoute = require('./routes/keepRoutes');
const transactionRoute = require('./routes/transactionRoutes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', stocklistRoute.routes);
app.use('/api', staffRoute.routes);
app.use('/api', officeRoute.routes);
app.use('/api', directionRoute.routes);
app.use('/api', keepRoute.routes);
app.use('/api', transactionRoute.routes);


app.listen(config.port, () => {
  console.log('app listening on url http://localhost:' + config.port )
});