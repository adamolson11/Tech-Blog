const sequelize = require('../config/connection');
const { User, BlogPost } = require('../models'); // Corrected the model name
const userData = require('./userData.json'); // Adjust the path accordingly
const blogPostData = require('./BlogPostData.json'); // Adjust the path accordingly



const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // await User.bulkCreate(userData, {
  //   individualHooks: true,
  //   returning: true,
  // });
  for (const user of userData) {
    await User.create(user)
  }

  await BlogPost.bulkCreate(blogPostDataData, {
    individualHooks: true,
    returning: true,
  })


  process.exit(0);
};

seedDatabase();
