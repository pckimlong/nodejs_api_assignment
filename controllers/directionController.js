const direction = require('../data/direction');

const getAllDirectionList = async (req, res, next) => {
    try {

        const result = await direction.allDirectionList();
        res.send(result);

    } catch (error) {
        res.status(400).send(error.message);
    }
}

const createNewDirection = async (req, res, next) => {
    try {
        
        const data = req.body;
        if(data.constructor === Object && Object.keys(data).length === 0) {
            res.send('Must insert data');
        }else{
            const insertedId = await direction.addDirection(data);
            res.send(insertedId);
        }

    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getDirectionById = async (req, res, next) => {
    try {
        
        const directionId = req.params.id;
        const result = await direction.directionById(directionId);
        res.send(result);

    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {getAllDirectionList, createNewDirection, getDirectionById}