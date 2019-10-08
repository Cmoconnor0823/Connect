'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Project_Meta', {
   
        meta_key: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
              len: [1]
            },
        adminaccess:{
            type: Sequelize.BOOLEAN
        }
          }
        });
        
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Project_Meta');
  }
};