module.exports = function(sequelize, DataTypes) {
    let Project_Meta = sequelize.define("Project_Meta", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement:true,
        primaryKey: true,
        validate: {
          len: [1]
        }
      },
      adminaccess: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        autoIncrement:true,
        primaryKey: true,
        validate: {
          len: [1]
        }
    }
  });
  
    Project_Meta.associate = function(models) {

      Project_Meta.belongsTo(models.Profile, {
        foreignKey: {
          allowNull: false
        }
      })
    };
    
    Project_Meta.associate = function(models) {
      Project_Meta.belongsTo(models.Project, {
        foreignKey: {
          allowNull: false
        }
      }
    );

    };
  
    return Project_Meta;
  };