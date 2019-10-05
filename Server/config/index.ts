const sequelize = require('sequelize');


module.exports = new sequelize('konnected_db', 'root', 'Th3Riddl3r?', {
      host: 'localhost',
      dialect: 'mysql',
      operatorsAliases: false,

      pool: {
          max:5,
          min:0,
          aquire:30000,
          idle: 10000

      },
    });
    
    