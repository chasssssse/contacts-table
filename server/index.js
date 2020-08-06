const express = require('express');
const bodyParser = require('body-parser');
const getContactsHandler = require('./handlers/getContacts');
const getDetailsHandler = require('./handlers/getDetails');

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/contacts', getContactsHandler.getContacts);
app.get('/details/:userId', getDetailsHandler.getDetails)

app.listen(port, () => console.log(`Listening on port ${port}`));