module.exports = {
    head: function(stmt) {
        if (process.env.ENV == 'development' || process.env.ENV != 'production'){
            console.group(stmt)
        }
    },
    log: function(stmt) {
        if (process.env.ENV == 'development' || process.env.ENV != 'production'){
            console.log(stmt)
        }
    },
    end: function() {
        if (process.env.ENV == 'development' || process.env.ENV != 'production'){
            console.groupEnd()
        }
    }
}