const keep = require('../data/keep');

const getAllKeepWithDetail = async (req, res, next) => {
    try {

        const result = await keep.allKeepWithDetail();
        res.send(result);

    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {getAllKeepWithDetail}