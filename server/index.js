const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const morgan = require('morgan');
require('dotenv').config({ path:'server/.env'});
const carsRouter = require('./routes/cars')


const  server = express();
const {
 SERVER_PORT,
MONGO_COMPASS_USER,
MONGO_COMPASS_PASS,
MONGO_COMPASS_CLUSTER_URL,
MONGO_COMPASS_CLUSTER_DB
 } = process.env;

server.use(cors());
server.use(morgan('tiny'));
server.use(express.json())

server.use('/cars', carsRouter);

server.get('/', (req, res) => {
    res.send('serveris veikia');
})



const db = mongoose.connection;
mongoose.connect(`mongodb+srv://${MONGO_COMPASS_USER}:${MONGO_COMPASS_PASS}@${MONGO_COMPASS_CLUSTER_URL}/${MONGO_COMPASS_CLUSTER_DB}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true} )

db.on('connected', function () {
    console.log('Connected to Database successfuly')
    server.listen(SERVER_PORT, () => {
        console.log(`Cars MERN server is running on http://localhost:${SERVER_PORT}`);
    });

})

db.on('error', (error) => console.error('FAILED TO CONNECT TO DB:\n ' + error))