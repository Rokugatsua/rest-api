const models = require('../models')
const rajaongkir = require('../api/rajaongkir');
const api2db = require('../services/api2db')
const Provinces = models.Provinces
const Cities = models.Cities


async function fetch_provinces() {
    try {
        console.log('fetch data');
        const provinces = await Provinces.findAll({raw:true})
        // console.log(provinces)
        console.log('provinces  '+typeof provinces)
        let lenght = 0
        provinces.forEach(element => {
            lenght += 1
        });
        console.log(lenght)   
        if (!provinces) {
            // Switch find by public api endpoint
            console.log('switch to public api province')
            const apiData = await rajaongkir.province()
            // update province db
            api2db.update_provinces_db({apiData:apiData, apiHost:"rajaongkir"})

            return apiData
        }
        return {
            rokgatsua: {
                status: {
                    code: 200,
                    description: "ok"
                },
                results: provinces
            }
        }
    } catch (err) {
        return {
            rokgatsua: {
                status: {
                    code: 404,
                    description: "not found"
                },
                results: {
                    message: err.message
                }
            }
        }
    }
}

async function fetch_cities(province_id) {
    console.log('fetch data cities');
    try {
        const cities = await Cities.findAll({
            where: {
                province_id: province_id
            },
            raw:true
        })
        let lenght = 0
        cities.forEach(el=>lenght += 1)
        console.log(lenght)
        if (!cities) {
            // Switch find by public api endpoint
            console.log('switch to public api')
            const apiData = await rajaongkir.city(province_id)

            let results = apiData.rajaongkir.results.filter((result)=>{
                return result.province_id == province_id
            })
            apiData.rajaongkir.results = results
            return apiData.rajaongkir
        }
        return {
            rokgatsua: {
                status: {
                    code: 200,
                    description: "ok"
                },
                results: cities
            }
        }
    } catch (err) {
        return {
            rokgatsua: {
                status: {
                    code: 404,
                    description: "not found in citie"
                },
                results: {
                    message: err.message
                }
            }
        }
    }
}




module.exports = {
    provincesController: {
        fetch_provinces
    },
    citiesController: {
        fetch_cities
    }
}