'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Project', {
   
        key: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
              len: [1]
            }
          },
        adminaccess:{
          type:Sequelize.INTEGER,
          allowNull:false
        }
      });
        
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Project');
  }
};