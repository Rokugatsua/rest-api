async function query(statement, value=[]){
    const mysql = require('mysql2/promise')
    const databaseConfig = require('../../config/database')
    const connection = await mysql.createConnection(databaseConfig)
    
    const res = await connection.query(statement, value)
    connection.end()
    return res
}

exports.find = async (province_id=null) => {
    const table = 'mock_loc_city'
    if (!province_id) {
        return await query(`SELECT * FROM ${table}`)        
    }

    return await query(`SELECT * FROM ${table} WHERE province_id = ?`, [province_id])
}

exports.fetch_all = async () => {
    const table = 'mock_loc_city'
    return await query(`SELECT * FROM ${table}`)
}

exports.updates = async (values, key) => {
    const table = 'mock_loc_city'
    try {
        // console.log(values.map(item => [item.province_id, item.province]))
        const insert = await query(
            `INSERT INTO ${table} (city_id, province_id, province, type, city_name, postal_code) VALUES ?`,
            [values.map(item => [item.city_id, item.province_id, item.province, item.type, item.city_name, item.postal_code ])]
        )
        return {message: `success insert into ${table}`}
    } catch (err) {
        return err
    }
}


exports.inserts = async (values) => {
    const table = 'mock_loc_city'
    try {
        // console.log(values.map(item => [item.province_id, item.province]))
        const insert = await query(
            `INSERT INTO ${table} (city_id, province_id, province, type, city_name, postal_code) VALUES ?`,
            [values.map(item => [item.city_id, item.province_id, item.province, item.type, item.city_name, item.postal_code ])]
        )
        return {message: `success insert into ${table}`}
    } catch (err) {
        return err
    }
}

// module.exports = provinceModel