const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config({ path:'server/.env'});
const carsRouter = require('./routes/cars')


const  server = express();
const { SERVER_PORT } = process.env;

server.use(cors());
server.use(morgan('tiny'));

server.use('/cars', carsRouter);

server.get('/', (req, res) => {
    res.send('serveris veikia');
})

server.listen(SERVER_PORT, () => {
    console.log(`Cars MERN server is running on http://localhost:${SERVER_PORT}`);
});