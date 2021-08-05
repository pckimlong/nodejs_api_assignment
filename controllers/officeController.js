const office = require('../data/office')

const getAllOfficeList = async (req, res, next) => {
    try {
        const result = await office.getOfficeList();
        res.send(result);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {getAllOfficeList}