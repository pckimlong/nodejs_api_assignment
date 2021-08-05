const poolPromise = require("../../dbConnection")
const utils = require('../utils');
const mssql = require('mssql');

const allDirectionList = async () =>{
    try {

        let pool = await poolPromise;
        const query = await utils.loadSqlQueries('direction');
        const result = await pool.request().query(query.directionList);

        return result.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const addDirection = async (directionData) => {
    try {
        let pool = await poolPromise;
        const query = await utils.loadSqlQueries('direction');
        const result = await pool.request()
                        .input('DirectionName', mssql.NVarChar, directionData.DirectionName)
                        .input('EmployeeRelating', mssql.Int, directionData.EmployeeRelating)
                        .input('OfficeRelating', mssql.Int, directionData.OfficeRelating)
                        .input('Description', mssql.NVarChar, directionData.Description)
                        .query(query.createDirection);
        return result.recordset;

    } catch (error) {
        console.log(error.message);
    }
}

const directionById = async (directionID) =>{
    try {

        let pool = await poolPromise;
        const query =  await utils.loadSqlQueries('direction');
        const result = await pool.request()
                            .input('DirectionID', mssql.Int, directionID)
                            .query(query.directionById);
        return result.recordset;
        
    } catch (error) {
        console.log(error.message);
    }
}


module.exports = {allDirectionList, addDirection, directionById}