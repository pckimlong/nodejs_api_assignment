const express = require('express');
const directionController = require('../controllers/directionController');

const router = express.Router();

router.get('/directionList', directionController.getAllDirectionList);
router.post('/direction', directionController.createNewDirection);
router.get('/direction/:id', directionController.getDirectionById);

module.exports = {routes: router}