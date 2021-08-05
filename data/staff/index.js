const poolPromise = require("../../dbConnection")
const utils = require('../utils')
const mssql = require('mssql');

const getStaffList = async () => {
    try {
        let pool = await poolPromise;
        const stafflistQuery = await utils.loadSqlQueries('staff');
        const stafflist = await pool.request().query(stafflistQuery.stafflist);
        return stafflist.recordset;

    } catch (error) {
        console.log(error.message);
    }
    
}

const getStaffById = async (staffId) => {
    try {
        let pool = await poolPromise;
        const sqlQueries = await utils.loadSqlQueries('staff');
        const staff  = await pool.request()
                            .input('staffid', mssql.Int, staffId)
                            .query(sqlQueries.staffById);
        return staff.recordset;
    } catch (error) {
        return error.message;
    }
}

const login = async (loginData) => {
    try {
        let pool = await poolPromise;
        const sqlQuery = await utils.loadSqlQueries('staff');
        const staff = await pool.request()
                        .input('username', mssql.NVarChar, loginData.username)
                        .input('password', mssql.NVarChar, loginData.password)
                        .query(sqlQuery.login);
        return staff.recordset;
    } catch (error) {
        return error.message;
    }
}


module.exports = {getStaffList, getStaffById, login}