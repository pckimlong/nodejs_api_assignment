const poolPromise = require("../../dbConnection");
const { loadSqlQueries } = require("../utils");


const allKeepWithDetail = async () => {
    try {

        let pool = await poolPromise;
        const sql = await loadSqlQueries('keep');
        const result = await pool.request().query(sql.keeplistWithDetail);
        return result.recordset;

    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {allKeepWithDetail}