'use strict';

const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const { PORT, HOST, HOST_URL, SQL_USER, SQL_PASSWORD, SQL_DATABASE, SQL_SERVER, SQL_ENCRYPT, SQL_PORT } = process.env;

assert(PORT, 'PORT is require');
assert(HOST, 'HOST is required');

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    sql: {
        server: "################",
        port: 8484,
        database: 'Stock', // this is my testing server
        authentication: {
            type: 'default',
            options: {
                userName: 'sa', // update me
                password: '#####' // update me
            }
        },
        options: {

            validateBulkLoadParameters: false,
            encrypt: false,
        }
    },
};