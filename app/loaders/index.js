
const expressLoader = require('./express')

async function autoload({expressApp}) {
    console.group('autoload')

    await expressLoader({app: expressApp})
    console.log('load express')

    console.groupEnd()
}


exports.autoload = autoload
