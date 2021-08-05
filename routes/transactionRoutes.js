const transactionController = require('../controllers/transactionController');

const express = require('express');
const router = express.Router();

router.get('/lastestDate', transactionController.getLastTransactionDate);
router.get('/loginSessionFound/:id', transactionController.checkIfLoginSessionFound);
router.post('/updateLastLogin', transactionController.updateLastLoginDate);
router.post('/saveLoginSession', transactionController.saveLoginSession);

module.exports = {routes: router} 