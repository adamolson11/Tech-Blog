const router = require('express').Router()
const {BlogPost, User} = require('../models')

//build out the homepage route. 

router.get('/', async (req, res) => {
try {
    const BlogPost = await BlogPost.findall({
        raw: true // raw: true changes the raw data from sequelize data to plain javascript objects
    })
    res.render('home', {BlogPost, loggedIn: req.session.logged_in }) // this code tells the program if the user is logged in or not.(loggedIn: is made by the programmer), 

} catch(err){
    res.status(500).json(err)
}
}) 

module.exports = router