// Entry point of application
const express = require('express')
const { autoload } = require('./loaders')

require('dotenv/config')

async function startApp() {
    
    const app = express()

    await autoload({expressApp: app})

    app.listen(process.env.PORT, err=> {
        if (err) {
            console.log(err)
            return
        }
        console.log(`app listen on ${process.env.PORT}`)
    })
    
}

startApp()