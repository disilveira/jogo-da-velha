'use strict';

const cors = require('cors');
const express = require('express');
const routes = require('./routes/mainRouter');
const bodyParser = require ('body-parser');

const server = express();

exports.init = callback => {
    server.use(bodyParser.urlencoded({extended: false}));
    server.use(bodyParser.json());
    server.use(cors());
    server.use('/', routes);
    server.listen(process.env.HHTP_PORT || 3000, callback);
}