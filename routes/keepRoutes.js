const express = require('express');

const router = express.Router();

const keepController = require('../controllers/keepController');

router.get('/keepListDetail', keepController.getAllKeepWithDetail);


module.exports = {routes: router}