'use strict';

const StocklistData = require('../data/stocklist');

const getAllStocklists = async (req, res, next) => {
    try {
        const Stocklistlist = await StocklistData.getStocklist();
        res.send(Stocklistlist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getStocklist = async (req, res, next) => {
    try {
        const StocklistId = req.params.id;
        const Stocklist = await StocklistData.getStocklistById(StocklistId);
        res.send(Stocklist);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllStocklists,
    getStocklist,
}