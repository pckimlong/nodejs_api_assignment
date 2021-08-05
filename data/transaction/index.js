const poolPromise = require("../../dbConnection")
const utils =  require("../utils");
const mssql = require('mssql');

const lastTransactionDate = async () =>{
    try {
        let pool = await poolPromise;
        const sql = await utils.loadSqlQueries("transaction");
        const result = await pool.request().query(sql.lastTransactionDate);
        return result.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const loginSessionFound = async (deviceId) => {
    try {
        let pool = await poolPromise;
        const sql = await utils.loadSqlQueries("transaction");
        const result = await pool.request()
                        .input('deviceId', mssql.NVarChar, deviceId)
                        .query(sql.checkLoginSessionFound);
        return result.recordset;

    } catch (error) {
        console.log(error.message);
    }
}

const updateLastLogin = async (data) => {
    try {
        let pool = await poolPromise;
        const sql = await utils.loadSqlQueries("transaction");
        const result = await pool.request()
                        .input('datetime', mssql.DateTime, data.datetime)
                        .input('deviceId', mssql.NVarChar, data.deviceId)
                        .input('userId', mssql.Int, data.userId)
                        .query(sql.updateLastLogin);
        return result.recordset;

    } catch (error) {
        console.log(error.message);
    }
}

const saveLoginSession = async (data) => {
    try {
        let pool = await poolPromise;
        const sql = await utils.loadSqlQueries("transaction");
        const result = await pool.request()
                        .input('deviceId', mssql.NVarChar, data.deviceId)
                        .input('deviceName', mssql.NVarChar, data.deviceName)
                        .input('userId', mssql.Int, data.userId)
                        .input('rememberLogin', mssql.Bit, data.rememberLogin)
                        .query(sql.saveLoginSession);
        return result.recordset;

    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {lastTransactionDate, loginSessionFound, updateLastLogin, saveLoginSession}