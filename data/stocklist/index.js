'use strict';
const utils = require('../utils');
const poolPromise = require('../../dbConnection');
const mssql = require('mssql');
const e = require('express');

const getStocklist = async () => {
    try {
        let pool = await poolPromise;
        const sqlQueries = await utils.loadSqlQueries('stocklist');
        const results = await pool.request().query(sqlQueries.stocklist);
        return results.recordset;

    } catch (error) {
        console.log(error.message);
    }
}

const getStocklistById = async(productId) => {
    try {
        let pool = await poolPromise;
        const sqlQueries = await utils.loadSqlQueries('stocklist');
        const Stocklist = await pool.request()
                            .input('productId', mssql.Int, productId)
                            .query(sqlQueries.stocklistById);
        return Stocklist.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getStocklist,
    getStocklistById,
}