const router = require('express').Router();
const { BlogPost, User } = require('../models');
const { findByPk } = require('../models/User');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const allBlogposts = await BlogPost.findAll({
      raw: true,
    });
    res.render('home', { allBlogposts, loggedIn: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/blogposts', async (req, res) => {
  try {
    const allBlogposts = await BlogPost.findAll({
      raw: true,
    });
    console.log(allBlogposts);
    res.render('all-blogposts', { allBlogposts, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/blogpost/:id', async (req, res) => {
  let id = req.params.id;
  try {
    let blogpost = await BlogPost.findByPk(id, {
      include: [{ model: User }],
    });
    blogpost = blogpost.get({ plain: true });
    let data = {
      ...blogpost,
      logged_in: req.session.logged_in,
    };
    res.render('blogpost', data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.redirect('/')
    });
  } else {
    res.redirect('/login')
  }
});

router.get('/profile', async (req, res) => {
  try {
    let user = await User.findByPk(req.session.user_id, {
      include: [{ model: BlogPost }],
    });
    user = user.get({ plain: true });
    let data = {
      ...user,
      logged_in: req.session.logged_in,
    };
    res.render('profile', data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/signup', async (req, res) => {
  try {
    res.render('signup');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/add-blogpost', (req, res) => {
  const userId = req.session.user_id;
  console.log("test", userId);

  if (!userId) {
    res.redirect('/login');
  }
  try {
    res.render('add-blogpost', { logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/sucess', async (req, res) => {
  try {
    res.render('sucess');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
