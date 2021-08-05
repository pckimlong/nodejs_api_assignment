'use strict';

const express = require('express');
const stockListControll = require('../controllers/stocklistController');
const router = express.Router();

router.get('/stocklist', stockListControll.getAllStocklists);
router.get('/stocklist/:id', stockListControll.getStocklist);

module.exports = {
    routes: router
}