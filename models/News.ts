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

<<<<<<< HEAD
      News.belongsTo(models.Profile, {through:'profile_news', as:'news'})
    };

    News.associate = function(models) {
      News.belongsTo(models.Project, {through:'project_news', as:"news"}
    )};

=======
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
    );
>>>>>>> 643a92d18adcda9b68a9f7e70032ed3f5ac02e55
    return News;
  };