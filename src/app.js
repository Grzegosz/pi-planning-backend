const express = require('express');
const cookieParser = require('cookie-parser');
const ParticipantsController = require('./ParticipantsController');

const app = express();
const cors = require('cors')

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use('/v2', ParticipantsController);

app.listen(3000, () => console.log(`Example app listening at http://localhost:3000`))

module.exports = app;
