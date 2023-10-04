const router = require('express').Router();
const { User, BlogPost } = require('../../models');

router.post('/add-BlogPost', async (req, res) => {
  try {
    const newBlogPost = await BlogPost.create({
      ...req.body,
      createdUserId: req.session.user_id
    })

    res.status(200).json(newBlogPost)
  } catch (err) {
    res.status(400).json(err)
  }
})

module.exports = router