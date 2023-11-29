const express = require('express');
const app = express();

app.use(express.json());

require('./connection/conn');

const bookRoute = require('./routes/booksRoutes');
app.use('/', bookRoute);

app.listen(1000, () => {
  console.log('Server started successfully');
});
