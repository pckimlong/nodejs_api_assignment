const poolPromise = require("../../dbConnection");
const utils = require('../utils')

const getOfficeList = async () => {
    try {
        let pool = await poolPromise;
        const officeQuery = await utils.loadSqlQueries('office');
        const result = await pool.request().query(officeQuery.officelist);
        return result.recordset;

    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {getOfficeList}