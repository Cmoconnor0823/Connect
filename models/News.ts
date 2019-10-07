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

      News.belongsTo(models.Profile, {through:'profile_news', as:'news'})
    };

    News.associate = function(models) {
      News.belongsTo(models.Project, {through:'project_news', as:"news"}
    )};

    return News;
  };