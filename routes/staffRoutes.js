'use strict';

const express = require('express');
const staffController = require('../controllers/staffController');

const router = express.Router();

router.get('/stafflist', staffController.getAllStaffList);
router.get('/staff/:id', staffController.getStaffById);
router.post('/login', staffController.login);

module.exports = {
    routes: router
}
