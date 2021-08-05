'use strict';

const officeController = require('../controllers/officeController')
const express = require('express');

const router = express.Router();


router.get('/officelist', officeController.getAllOfficeList);

module.exports = {
    routes: router
}