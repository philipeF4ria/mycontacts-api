const express = require('express');
require('express-async-errors');

const router = require('./routes');
const cors = require('./app/middlewares/cors');
const errorHandler = require('./app/middlewares/errorHandler');

const app = express();

app.use(express.json());
app.use(cors);
app.use(router);
app.use(errorHandler);

app.listen(3000, () => console.log('Server started at http://localhost:3000'));
