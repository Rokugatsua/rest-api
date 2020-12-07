const {Router} = require('express')
const {provincesController, citiesController} = require('../controllers/location')
const router = Router()

router.get('/province', async (req, res) => {
    try {
        let provinces = await provincesController.fetch_provinces()  
        res.json(provinces)
    } catch (err) {
        console.log(err);
    }
})

router.get('/:provinceId/city', async (req, res) => {
    try {
        let province_id = req.params.provinceId
        let city = await citiesController.fetch_cities(province_id)  
        res.json(city)
    } catch (err) {
        console.log(err);
    }
})


module.exports = router