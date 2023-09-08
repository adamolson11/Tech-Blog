const { Model, DataTypes } = require('sequelize'); //giving us access to the model object and methods
const sequelize = require('../config/connection'); // linking together this file with the connection.js file so when connection is executed this waterfalls into it.

class BlogPost extends Model {} //now using the model Object made available by sequelize.

Project.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'BlogPost',
  }
);

module.exports = BlogPost;