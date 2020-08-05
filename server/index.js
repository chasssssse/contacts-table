const express = require('express');
const bodyParser = require('body-parser');
const dbConnection = require('./db/db_connection.js');

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(dbConnection);

app.get('/api/test', (req, res, next) => {
  req.getConnection((err, connection) => {
    if (err) return next(err);

    connection.query('SELECT Name from expedia.contact WHERE UserID = 1', [], (err, results) => {
      if (err) return next(err);

      console.log('Result: ', results);

      res.send({ data: results });
    });
  })
})

app.listen(port, () => console.log(`Listening on port ${port}`));