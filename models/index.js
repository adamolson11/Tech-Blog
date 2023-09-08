//the purpose of this file is to establish the relationships between data. so we can build the keys for the key value pairs and join tables.
const User = require('./User'); //imports code from User file
const BlogPost = require('./BlogPost'); //imports code from Project file


User.hasMany(BlogPost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
}); //one to many relationship. 

BlogPost.belongsTo(User, {
  foreignKey: 'user_id'
}); //one to one relationship. 

module.exports = { User, BlogPost }; // makes this data accessible to other files.
