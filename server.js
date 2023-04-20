const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');

//Load environmental variables
dotenv.config({ path: './config/.env'});
            
//Connect to database
connectDB();

//Route files
const bootcamps = require('./routes/bootcamps');

const app = express();
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
//Mount routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
