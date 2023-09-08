const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}


// These hooks are executed before creating a new user record and before updating an existing user record. The primary purpose of these hooks is to hash the user's password before it is stored or updated in the database for security purposes.

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    
    firstName:
    {
      type: DataTypes.STRING,
      allowNull: false,
    },

    lastName:

    {
      type: DataTypes.STRING,
      allowNull: false,
    },


    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {


    // These hooks are executed before creating a new user record and before updating an existing user record. The primary purpose of these hooks is to hash the user's password before it is stored or updated in the database for security purposes. Here's a breakdown of what this code does:

    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },


    sequelize, //references the database connection instance we just created
    timestamps: false, // Disables the created At and updataedAt fields so that we can just display the date or time
    freezeTableName: true, //Prevents sequelize from pluralizing the table name
    underscored: true, //uses underscores instead of camelCase for column names 
    modelName: 'user', //Sets the Model Name to user.
  }
);


module.exports = User;