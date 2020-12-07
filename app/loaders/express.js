const cors = require('cors')
const bodyParser = require('body-parser')
const Routes = require('../routers')

module.exports = async function({app}){
    
    // MIDDLEWARE
    app.use(cors())
    // app.use(bodyParser.urlencoded({extended:true}))
    app.use(bodyParser.json())

    // load all route
    Routes.routes.forEach(route => {
       app.use(route.link, route.router) 
    });

    // Status Check
    app.get('/status', (req, res) => { 
        res.status(200)
        res.json({status: '200 ok'})
     });
    app.head('/status', (req, res) => { res.status(200); });
    app.enable('trust proxy');


    return app

}