const axios = require('axios').default

module.exports = {
    async province() {
        try {
            let api_endpoint = process.env.API_RAJAONGKIR_PROVINCE
            const resultsApi = await axios({
                method: "get",
                url: api_endpoint,
                headers: {
                    "key": process.env.API_RAJAONGKIR_SECRET_KEY
                }
            })
            console.log(`call api endpoint ${api_endpoint}`)
            return resultsApi.data
        } catch (err) {
            return {
                rokugatsua: {
                    status:{
                        code:"500",
                        description: "internal error"
                    },
                    results: {
                        message: err.message
                    }
                }
            }
        }
    },
    async city(province_id) {
        try {
            let api_endpoint = process.env.API_RAJAONGKIR_CITY
            const resultsApi = await axios({
                method: "get",
                url: api_endpoint,
                headers: {
                    "key": process.env.API_RAJAONGKIR_SECRET_KEY,
                    // "province": `${province_id}` ?? ''
                }
            })
            console.log(`call api endpoint ${api_endpoint} with province id = ${province_id}`)
            return resultsApi.data
        } catch (err) {
            return {
                rokugatsua: {
                    status:{
                        code:"500",
                        description: "internal error"
                    },
                    results: {
                        message: err.message
                    }
                }
            }
        }

    }
}