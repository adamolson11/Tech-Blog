//the purpose of this file is to establish the relationships between data. so we can build the keys for the key value pairs.
const User = require('./User'); //imports code from User file
const Project = require('./Project'); //imports code from Project file

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
}); //one to many relationship. 

Project.belongsTo(User, {
  foreignKey: 'user_id'
}); //one to one relationship. 

module.exports = { User, Project }; // makes this data accessible to other files.
