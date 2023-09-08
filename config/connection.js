const Sequelize = require('sequelize');  
require('dotenv').config(); 
//You import the necessary dependencies, including Sequelize and the dotenv library to load environment variables.


let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);

  // check if the JAWSDB_URL environment variable is present. If it is, you assume that you are running the application in a production environment (e.g., on Heroku) and configure Sequelize to use the provided database URL.
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

// If JAWSDB_URL is not present (indicating a non-production environment), you configure Sequelize to use the local MySQL database, and you pull the database connection settings from environment variables (DB_NAME, DB_USER, DB_PASSWORD, etc.).










module.exports = sequelize; //export contents of this file to make it available.