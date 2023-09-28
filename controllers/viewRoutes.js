const router = require('express').Router()
const {BlogPost, User} = require('../models')

//build out the homepage route. 

router.get('/', async (req, res) => {
try {
    const allBlogs = await BlogPost.findAll({
        raw: true // raw: true changes the raw data from sequelize data to plain javascript objects
    })
    res.render('home', {allBlogs, loggedIn: req.session.logged_in }) // this code tells the program if the user is logged in or not.(loggedIn: is made by the programmer), 

} catch(err){
    console.log(err);
    res.status(500).json(err)
}
}) 

module.exports = router