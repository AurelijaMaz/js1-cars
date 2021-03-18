const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config({ path:'server/.env'});


const  server = express();
const { SERVER_PORT } = process.env;

server.use(cors());
server.use(morgan('tiny'));

server.get('/', (req, res) => {
    res.send('serveris veikia')
})

server.listen(SERVER_PORT, () => {
    console.log(`Cars MERN server is running on http:${SERVER_PORT}`);
})