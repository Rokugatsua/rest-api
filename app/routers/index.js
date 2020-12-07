const Home = require('./home')
const Post = require('./post')
const Location = require('./location')

exports.routes = [
    {link:'/', router: Home},
    {link:'/post', router: Post},
    {link:'/loc', router: Location }
]