const transaction = require('../data/transaction');

const getLastTransactionDate = async (req, res, next) =>{
    try {
        const lastDate = await transaction.lastTransactionDate();
        res.send(lastDate[0].lastest);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const checkIfLoginSessionFound = async (req, res, next) => {
    try {
        const deviceId = req.params.id;
        const result = await transaction.loginSessionFound(deviceId);
        res.send(result[0]);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateLastLoginDate = async (req, res, next) => {
    try {
        const data = req.body;
        await transaction.updateLastLogin(data);
        res.send('');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const saveLoginSession = async (req, res, next) => {
    try {
        const data = req.body;
        const effect = await transaction.saveLoginSession(data);
        res.send(effect);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {getLastTransactionDate, checkIfLoginSessionFound, updateLastLoginDate,saveLoginSession}