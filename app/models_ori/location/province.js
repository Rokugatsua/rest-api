async function query(statement, value=[]){
    const mysql = require('mysql2/promise')
    const databaseConfig = require('../../config/database')
    const connection = await mysql.createConnection(databaseConfig)
    
    const res = await connection.query(statement, value)
    connection.end()
    console.log('connection 1')
    return res
}

const scheme = {
    province_id: "integer",
    provice: "string"
}

exports.fetch_all = async () => {
    const table = 'mock_loc_province'
    return await query(`SELECT * FROM ${table}`)
}

exports.inserts = async (values) => {
    const table = 'mock_loc_province'
    try {
        // console.log(values.map(item => [item.province_id, item.province]))
        const insert = await query(
            `INSERT INTO ${table} (province_id, province) VALUES ?`,
            [values.map(item => [item.province_id, item.province])]
        )
        return {message: `success insert into ${table}`}
    } catch (err) {
        return err
    }
}

// module.exports = provinceModel