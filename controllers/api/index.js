
const router = require('express').Router();

const userRoutes = require('./userRoutes');
const BlogPostRoutes = require('./BlogPostRoutes');

router.use('/users', userRoutes);
router.use('/', BlogPostRoutes);

module.exports = router;
