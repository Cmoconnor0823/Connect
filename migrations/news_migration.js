'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('News', {
   
        post: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
              len: [1]
            }
          }
        });
        
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('News');
  }
};