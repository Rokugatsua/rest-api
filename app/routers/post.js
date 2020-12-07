const express = require('express')
const router = express.Router()

// post route ('/post')

router.get('/', (req, res) => {
    res.json({posttitle:'my post is awesome'})
})

router.post('/', (req, res) => {
    // CREATE NEW POST!
    console.log(req.body)
})

router.get('/:postId', (req, res) => {
    // GET POST DETAIL BY ID!
    let postId = req.params.postId
})

router.put('/:postId', (req, res) => {
    // UPDATE POST!
})

router.put('/:postId', (req, res) => {
    // DELETE POST!
})





module.exports = router