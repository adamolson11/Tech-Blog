const sequelize = require('../config/connection');
const { User, BlogPost } = require('../models'); // Corrected the model name
const userData = require('./userData.json'); // Adjust the path accordingly
const blogPostData = require('./BlogPostData.json'); // Adjust the path accordingly


const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

    for (const postData of blogPostData) {
      await BlogPost.create({
        ...postData,
        user_id: users[Math.floor(Math.random() * users.length)].id,
      });
    }

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding database:', err);
    process.exit(1); // Exit with a non-zero code to indicate failure
  }
};

seedDatabase();
