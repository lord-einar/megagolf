const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('gojeda_golf', 'teltrun', 'Calamuchita1983', {
    host: 'http://db4free.net:3306',
    dialect: 'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

  const dbConnection = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  }
  
  
  module.exports = dbConnection;