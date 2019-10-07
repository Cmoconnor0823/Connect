module.exports = function(sequelize, DataTypes) {
    let Project_Meta = sequelize.define("Project_Meta", {
      meta_key: {
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
        allowNull: false
    }
  });
  
    Project_Meta.associate = function(models) {

      Project_Meta.belongsTo(models.Profile, {through:models.Profile, as:"pm_id" })
    };
    
    Project_Meta.associate = function(models) {
      Project_Meta.belongsTo(models.Project, {through:models.Project, as:"pm_id" 
      }
    );

    };
  
    return Project_Meta;
  };