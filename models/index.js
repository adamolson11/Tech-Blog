//the purpose of this file is to establish the relationships between data. so we can build the keys for the key value pairs and join tables.

const User = require('./User');
const BlogPost = require('./BlogPost')

User.hasMany(BlogPost, {
  foreignKey: 'createdUserId'
})

BlogPost.belongsTo(User, {
  foreignKey: 'createdUserId'
})
module.exports = { User, BlogPost };
