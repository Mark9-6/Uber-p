const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const connectToDb = require('./db/db');
const app = express();
const userRoutes = require('./routes/user.routes');
const cookieParser = require('cookie-parser');
const captainRoutes = require('./routes/captain.routes');
const mapsRoutes = require('./routes/maps.routes')

connectToDb();


app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/users',userRoutes)
app.use('/captains', captainRoutes);
app.use('/maps',mapsRoutes)

module.exports = app;