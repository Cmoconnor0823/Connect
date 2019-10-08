module.exports = function(sequelize, DataTypes) {
    let News = sequelize.define("News", {
   
      post: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    });
    News.associate = function(models) {

      News.belongsTo(models.Profile, {
        foreignKey: {
          allowNull: false
        }
      })
    };

    News.associate = function(models) {
      News.belongsTo(models.Project, {
        foreignKey: {
          allowNull: false
        }
      }
    )};
    return News;
  };