const {Provinces, Cities} = require('../models')

async function update_provinces_db({apiData, apiHost}){
    if(apiData[apiHost].status.code == 200){
        let results = apiData[apiHost].results
        console.log(results.lenght)
        try {
            await Provinces.bulkCreate(results)
            return "province db has update"
        } catch(err) {
            console.log(err)
        }
    }
}
async function update_cities_db({apiData, apiHost}){
    if(apiData[apiHost].status.code == 200){
        let results = apiData[apiHost].results
        console.log(results.lenght)
        try {
            await Cities.bulkCreate(results)
            return "province db has update"
        } catch(err) {
            console.log(err)
        }
    }
}

module.exports = {
    update_cities_db,
    update_provinces_db
}