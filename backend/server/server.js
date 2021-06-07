const express  = require('express');
const app = express();
const api = require('./router/index');
const login = require('./router/login');
const passport  = require('passport');
const bodyParser = require('body-parser');
const session  = require('express-session');
const cookieParser = require('cookie-parser');

const cors = require('cors');

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());


app.use(cors());
app.use(bodyParser.json());
app.use('/api', api);
app.use('/auth', login);

const port = 3002;
app.listen(port, () => console.log(`Listening on port ${port}`));