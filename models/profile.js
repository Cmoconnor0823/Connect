'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
    }},
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            len:[1]
        }
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
      }},
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            len:[1]
        }
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true
    },
        
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            len:[1]
        }
    }, position: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            len:[1]
        }
    }
  }, {});
  Profile.associate = function(models) {
    // associations can be defined here
  };
  return Profile;
};